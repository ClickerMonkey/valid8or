
import { Validator } from '../Validator';
import { isPlainObject } from '../functions';
import { ResultObject, ResultFor, MergeObjects, GetMessage, Check } from '../types';


export type ValidatorMap<T> = 
{
  [P in keyof T]?: Validator<T[P]> 
};

export function obj<T extends object = {}> (): ValidatorObject<T>
{
  return new ValidatorObject<T>(async (value, next) => next(value));
}

export class ValidatorObject<T extends object> extends Validator<T>
{

  public properties?: ValidatorMap<T>;

  public constructor (check: Check<T>, parent?: Validator<T>, getMessage?: GetMessage<T>)
  {
    super(check, parent, getMessage);

    if (parent instanceof ValidatorObject && parent.properties)
    {
      this.properties = { ...(parent as ValidatorObject<T>).properties };
    }
  }
  
  protected parse (value: any): any
  {
    return value;
  }

  protected isValid(parsed: any, value: any): parsed is T
  {
    return isPlainObject(parsed);
  }

  protected getComparator (a: T, b: T): number
  {
    // a > b
    for (let prop in a) 
    {
      if (!(prop in b)) 
      {
        return 1;
      }
    }

    // a < b
    for (let prop in b) 
    {
      if (!(prop in a)) 
      {
        return -1;
      }
    }
    
    // a = b
    return 0;
  }

  public add<P extends object = {}>(additionalProps: ValidatorMap<P>): ValidatorObject<MergeObjects<T, P>>
  {
    const props = { 
      ...this.properties,
      ...additionalProps,
    };

    return this.props(props) as any;
  }

  public props<P extends object = {}>(overrideProps: ValidatorMap<P>): ValidatorObject<P>
  {
    const validator = this.validate<P>(async function (this: ValidatorObject<P>, value, next, done, fail, path, addItem) 
    {
      const props = this.properties;
      const result: ResultObject<P> = {};
      let valid = true;

      for (let prop in props) 
      {
        const validator = props[prop];

        if (!validator) 
        {
          continue;
        }

        const [pass, updatedValue, failResult, items] = await validator.runAsTuple(value[prop], path.concat([prop]));

        if (pass)
        {
          if (updatedValue !== undefined) 
          {
            value[prop] = updatedValue;
          } 
          else 
          {
            delete value[prop];
          }
        }
        else
        {
          items.forEach(addItem);

          result[prop] = failResult;
          valid = false;
        }
      }

      if (valid) 
      {
        await next(value);
      } 
      else 
      {
        fail(result as ResultFor<P>, path);
      }
    }) as any;

    validator.properties = overrideProps;

    return validator;
  }

  public instanceOf (type: new (...args: any[]) => T): this
  {
    return this.is(value => value instanceof type).message('instanceOf');
  }

  public wrap<O extends object = T> (type: new (value: T) => O): ValidatorObject<O>
  {
    return this.transform(value => new type(value));
  }

}