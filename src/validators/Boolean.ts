
import { Validator } from '../Validator';


export function bool(): ValidatorBoolean
{
  return new ValidatorBoolean(async (value, next) => next(value));
}

export class ValidatorBoolean extends Validator<boolean>
{
  
  private truthy: RegExp = /^(true|1|yes|y)$/i;
  private falsy: RegExp = /^(false|0|no|n)$/i;

  protected parse (value: any): any
  {
    return this.truthy.test(value + '') 
      ? true
      : this.falsy.test(value + '')
        ? false
        : value
    ;
  }

  protected isValid (parsed: any, value: any): parsed is boolean
  {
    return typeof parsed === 'boolean';
  }

  protected getComparator (a: boolean, b: boolean): number
  {
    return (a ? 1 : 0) - (b ? 1 : 0);
  }

  public withTruthy (truthy: RegExp): this
  {
    this.truthy = truthy;
    
    return this;
  }

  public withFalsy (falsy: RegExp): this
  {
    this.falsy = falsy;

    return this;
  }

}
