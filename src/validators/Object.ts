
import { Validator } from '../Validator';
import { isPlainObject } from '../functions';
import { ResultObject, ResultFor } from '../types';


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

  public props<P extends object = {}>(props: ValidatorMap<P>): ValidatorObject<P>
  {
    return this.validate<P>(async function (value, next, done, fail, path, addItem) 
    {
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