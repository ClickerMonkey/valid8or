
import { Validator } from '../Validator';
import { toArray, isEmpty, resolve } from '../functions';
import { Comparator, Value } from '../types';


export function arr<T = unknown> (): ValidatorArray<T>
{
  return new ValidatorArray<T>(async (value, next) => next(value));
}

export class ValidatorArray<T> extends Validator<T[]>
{

  private typeValidator?: Validator<T>;

  protected parse (value: any): any
  {
    return isEmpty(value) ? value : toArray(value);
  }

  protected isValid (parsed: any, value: any): parsed is T[]
  {
    return Array.isArray(parsed);
  }

  protected getComparator (a: T[], b: T[]): number
  { 
    const d = a.length - b.length;

    if (d !== 0) 
    {
      return d;
    }
    
    const comparator = this.getTypeComparator();

    if (!comparator) 
    { 
      throw 'Cannot compare arrays before a type with a comparator is specified';
    }

    for (let i = 0; i < a.length; i++) 
    {
      const r = comparator(a[i], b[i]);

      if (r !== 0) 
      {
        return r;
      }
    }
    
    return 0;
  }

  public getTypeValidator (): Validator<T> | undefined
  {
    if (this.typeValidator) 
    {
      return this.typeValidator;
    }

    if (this.parent && this.parent.getTypeValidator) 
    {
      return this.parent.getTypeValidator();
    }
  }

  public getTypeComparator (): Comparator<T> | undefined
  {
    const validator = this.getTypeValidator();

    if (validator) 
    {
      return validator.comparator;
    }
  }

  public type<E> (type: Validator<E>, removeAndIgnoreInvalid: boolean = false): ValidatorArray<E>
  {
    return this.types<E>([type], false, removeAndIgnoreInvalid);
  }

  public types<E> (types: Validator<E>[], requireDivisibleAmount: boolean = true, removeAndIgnoreInvalid: boolean = false): ValidatorArray<E>
  {
    type V = this;

    return this.validate<E[]>(async function (this: ValidatorArray<E>, value, next, done, fail, path, addItem) 
    {
      this.typeValidator = types.length === 1 ? types[0] : undefined;

      if (requireDivisibleAmount && value.length % types.length !== 0)
      {
        this.triggerFail(value, path, fail, addItem);

        return;
      }

      const result: any[] = [];
      const newValue: any[] = value.slice();
      let removing: number[] = [];
      let valid: boolean = true;

      for (let i = 0; i < value.length; i++) 
      {
        const [pass, updatedValue, failResult, items] = await types[i % types.length].runAsTuple(value[i], path.concat([i]));

        if (pass) 
        {
          newValue[i] = updatedValue;
        } 
        else 
        {
          items.forEach(addItem);

          if (removeAndIgnoreInvalid) 
          {
            removing.push(i);
          } 
          else 
          {
            result[i] = failResult;
            valid = false;
          }
        }
      }

      if (valid) 
      {
        if (removing.length > 0) 
        {
          for (let i = removing.length - 1; i >= 0; i--) 
          {
            newValue.splice(removing[i], 1);
          }
        }

        await next(newValue);
      } 
      else 
      {
        fail(result, path);
      }
    }) as any;
  }

  public minLength (min: Value<number>): this
  {
    return this.is(value => value.length >= resolve(min)).message('minLength');
  }

  public maxLength (max: Value<number>): this
  {
    return this.is(value => value.length <= resolve(max)).message('maxLength');
  }

  public every (every: (item: T, index: number, all: T[]) => boolean): this
  {
    return this.is(value => value.every(every)).message('every');
  }

  public some (some: (item: T, index: number, all: T[]) => boolean): this
  {
    return this.is(value => value.some(some)).message('some');
  }

  public reverse (): this
  {
    return this.transform(value => value.slice().reverse());
  }

  public filter (filter: (item: T, index: number, all: T[]) => boolean): this
  {
    return this.transform(value => value.filter(filter));
  }

  public sort (sorter?: Comparator<T>): this
  {
    type V = this;

    return this.transform(function(this: V, value) 
    {
      if (!sorter)
      {
        sorter = this.getTypeComparator();
      }

      return value.slice().sort(sorter)
    });
  }

  public map<M> (mapper: (item: T) => M): ValidatorArray<M>
  {
    return this.transform<M[], ValidatorArray<M>>(value => value.map(mapper));
  }

  public unique (comparator?: Comparator<T>): this
  {
    type V = this;

    return this.is(function(this: V, value) 
    {
      if (!comparator && !(comparator = this.getTypeComparator())) 
      {
        throw 'Cannot ensure unique values when a type or comparator has not been specified';
      }

      for (let i = 0; i < value.length - 1; i++) 
      {
        for (let k = 1; k < value.length; k++) 
        {
          if (comparator(value[i], value[k]) === 0) 
          {
            return false;
          }
        }
      }

      return true;

    }).message('unique');
  }

  public removeDuplicates (comparator?: Comparator<T>): this
  {
    type V = this;

    return this.transform(function (this: V, value) 
    {
      if (!comparator && !(comparator = this.getTypeComparator())) 
      {
        throw 'Cannot remove duplicate values when a type or comparator has not been specified';
      }

      const newValue = value.slice();

      for (let i = 0; i < newValue.length - 1; i++) 
      {
        for (let k = i + 1; k < newValue.length; k++) 
        {
          if (comparator(newValue[i], newValue[k]) === 0) 
          {
            newValue.splice(k--, 1);
          }
        }
      }

      return newValue;
    });
  }

}