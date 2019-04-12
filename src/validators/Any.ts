
import { Validator } from '../Validator';


export function any(): ValidatorAny
{
  return new ValidatorAny(async (value, next) => next(value));
}

export class ValidatorAny extends Validator<any>
{

  protected parse (value: any): any
  {
    return value;
  }

  protected isValid(parsed: any, value: any): parsed is any
  {
    return parsed !== undefined;
  }

  protected getComparator (a: any, b: any): number
  {
    return 0;
  }
  
}
