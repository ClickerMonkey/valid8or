
import { Check, GetMessage, Comparator, Value, Next, Done, Fail, Tuple, Result, ResultFor } from './types';
import { isGetMessage, resolve, isEmpty, isString } from './functions';


export abstract class Validator<T>
{

  public parent?: this;
  public check: Check<T>;
  public getMessage: GetMessage<T>;
  public comparator: Comparator<T>;

  public constructor (check: Check<T>, parent?: Validator<T>, getMessage?: GetMessage<T>)
  {
    this.check = check;
    this.parent = parent as this;
    this.comparator = this.getComparator.bind(this);
    this.message(getMessage || 'invalid')
  }

  protected abstract getComparator (a: T, b: T): number;

  protected abstract parse (value: any): any;

  protected abstract isValid (parsed: any, value: any): parsed is T;

  protected newInstance (): this
  {
    return new (<any>this.constructor)((value: T, next: Next<T>) => next(value));
  }

  public message (getMessage: GetMessage<T> | string): this
  {
    this.getMessage = isGetMessage<T>(getMessage) 
      ? getMessage 
      : ((() => getMessage) as unknown as GetMessage<T>);
    return this;
  }

  public withComparator (comparator: Comparator<T>): this
  {
    this.comparator = comparator;
    return this;
  }

  public reverseComparator (): this
  {
    const forward = this.comparator;
    this.comparator = (a, b) => forward(b, a);
    return this;
  }

  public validate (check: Check<T>): this
  {
    return new (<any>this.constructor)(check, this);
  }

  public transform<R = T, V = this> (transformer: (value: T) => R | Promise<R>): V
  {
    return this.validate(async function (this: V, value, next, done, fail) 
    {
      return next(await transformer.call(this, value) as unknown as T)

    }) as unknown as V;
  }

  public eval (required: Value<boolean>, defaults?: Value<T>): this
  {
    type V = this;

    return this.validate(async function (this: V, value, next, done, fail) 
    {
      const parsed = this.parse(value);

      if (!this.isValid(parsed, value)) 
      {
        if (resolve(required)) 
        {
          if (isEmpty(value) && defaults !== undefined) 
          {
            done(resolve(defaults));
          } 
          else 
          {
            fail(this.getMessage(value));
          }
        } 
        else 
        {
          if (defaults !== undefined) 
          {
            done(resolve(defaults));
          } 
          else 
          {
            done(value);
          }
        }
      } 
      else 
      {
        await next(parsed);
      }
    }).message('check');
  }

  public required (defaults?: Value<T>): this
  {
    return this.eval(true, defaults).message('required');
  }

  public optional (defaults?: Value<T>): this
  {
    return this.eval(false, defaults).message('optional');
  }

  public is (check: (value: T) => boolean | Promise<boolean>): this
  {
    type V = this;

    return this.validate(async function (this: V, value, next, done, fail) 
    {
      if (!(await check(value))) 
      {
        fail(this.getMessage(value));
      } 
      else 
      {
        await next(value);
      }
    });
  }

  public oneOf (values: Value<T[]>): this
  {
    return this.is(value => resolve(values).findIndex(v => this.comparator(value, v) === 0) !== -1).message('oneOf');
  }

  public notOneOf (values: Value<T[]>): this
  {
    return this.is(value => resolve(values).findIndex(v => this.comparator(value, v) === 0) === -1).message('notOneOf');
  }

  public equals (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) === 0).message('equals');
  }

  public lessThan (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) < 0).message('lessThan');
  }

  public lessThanEqual (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) <= 0).message('lessThanEqual');
  }

  public max (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) <= 0).message('max');
  }

  public greaterThan (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) > 0).message('greaterThan');
  }

  public greaterThanEqual (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) >= 0).message('greaterThanEqual');
  }

  public between (min: Value<T>, max: Value<T>): this
  {
    return this.is(value => 
      this.comparator(value, resolve(min)) >= 0 && 
      this.comparator(value, resolve(max)) <= 0).message('between');
  }

  public min (compareTo: Value<T>): this
  {
    return this.is(value => this.comparator(value, resolve(compareTo)) >= 0).message('min');
  }

  public fail(): this
  {
    type V = this;

    return this.validate(async function (this: V, value, next, done, fail) 
    {
      fail(this.getMessage(value));
    });
  }

  public or (getMany: (validator: this) => this[]): this
  {
    type V = this;

    return this.validate(async function (this: V, value, next, done, fail) 
    {
      const root = this.newInstance();
      const many = getMany(root);

      for (let i = 0; i < many.length; i++) 
      {
        const [pass, updatedValue, failReason] = await many[i].runAsTuple(value);

        if (pass && updatedValue !== undefined)
        {
          return await next(updatedValue);
        }
      }

      fail(this.getMessage(value));
    });
  }

  public json (): this
  {
    return this.transform(value => 
    {
      if (isString(value)) 
      {
        try {
          value = JSON.parse(value);
        } catch (e) {}
      }

      return value;
    });
  }

  public nullify (): this
  {
    return this.transform(value => null);
  }

  public remove (): this
  {
    return this.transform(value => undefined);
  }

  public set (newValue: Value<T>): this
  {
    return this.transform(value => resolve(newValue));
  }

  public async run (value: any, next: Next<T>, done: Done<T>, fail: Fail<T>): Promise<void>
  {
    if (this.parent) 
    {
      await this.parent.run(value, (newValue) => this.check(newValue, next, done, fail), done, fail);
    }
    else
    {
      await this.check(value, next, done, fail);
    }
  }

  public async runAsTuple (value: any): Promise<Tuple<T>>
  {
    let pass = true;
    let updated: T | undefined = undefined;
    let result: ResultFor<T> | undefined = undefined;

    await this.run(value, 
      async (nextValue)  => {
        updated = nextValue;
      },
      (doneValue) => {
        updated = doneValue;
      },
      (failResult) => {
        result = failResult;
        pass = false;
      }
    );

    return [pass, updated, result];
  }

  public async runAsPromise (value: any): Promise<T>
  {
    return new Promise<T>((resolve, reject) => 
    {
      this.run(value, async(value) => resolve(value), resolve, reject);
    });
  }
  
}