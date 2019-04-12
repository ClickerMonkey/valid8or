
import { Validator } from '../Validator';
import { isPlainObject } from '../functions';
import { ResultObject, ResultFor } from '../types';


export type ValidatorMap<T> = 
{
  [P in keyof T]?: Validator<T[P]> 
};

export function obj<T extends object = any> (): ValidatorObject<T>
{
  return new ValidatorObject<T>(async (value, next) => next(value));
}

export class ValidatorObject<T extends object> extends Validator<T>
{
  
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

  public props (props: ValidatorMap<T>): this
  {
    return this.validate(async function (value, next, done, fail) 
    {
      const result: ResultObject<T> = {};
      let valid = true;

      for (let prop in props) 
      {
        const validator = props[prop];

        if (!validator) 
        {
          continue;
        }

        const [pass, updatedValue, failResult] = await validator.runAsTuple(value[prop]);

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
        fail(result as ResultFor<T>);
      }
    });
  }

  public instanceOf (type: new (...args: any[]) => T): this
  {
    return this.is(value => value instanceof type).message('instanceOf');
  }

  public wrap (type: new (value: T) => T): this
  {
    return this.transform(value => new type(value));
  }

}