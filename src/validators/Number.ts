
import { Validator } from '../Validator'
import { trimIfString } from '../functions';


export function int<N extends number = number>(): ValidatorNumber<N>
{
  return new ValidatorNumber<N>(async (value, next) => next(value)).withParser(parseInt);
}

export function float<N extends number = number>(): ValidatorNumber<N>
{
  return new ValidatorNumber<N>(async (value, next) => next(value)).withParser(parseFloat);
}

export class ValidatorNumber<N extends number = number> extends Validator<N>
{
  
  public parser: (value: any) => number = parseFloat;

  protected parse (value: any): any
  {
    return this.parser(trimIfString(value));
  }

  protected isValid (parsed: any, value: any): parsed is N
  {
    return isFinite(parsed);
  }

  protected getComparator (a: number, b: number): number
  {
    return a - b;
  }

  public withParser(parser: (value: any) => number): this
  {
    this.parser = parser;

    return this;
  }

  public isPositive (): this
  {
    return this.is(value => value >= 0).message('isPositive');
  }

  public isNegative (): this
  {
    return this.is(value => value < 0).message('isNegative');
  }
  
  public floor (): this
  {
    return this.transform(value => Math.floor(value));
  }
  
  public abs (): this
  {
    return this.transform(value => Math.abs(value));
  }
  
  public neg (): this
  {
    return this.transform(value => -value);
  }

  public ceil (): this
  {
    return this.transform(value => Math.ceil(value));
  }

  public round (): this
  {
    return this.transform(value => Math.round(value));
  }

}