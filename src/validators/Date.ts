
import { Validator } from '../Validator';
import { Value } from '../types';
import { resolve } from '../functions';
import { ValidatorNumber } from './Number';


export function date(): ValidatorDate
{
  return new ValidatorDate(async (value, next) => next(value));
}

export class ValidatorDate extends Validator<Date>
{

  protected parse (value: any): any
  {
    return new Date(value);
  }

  protected isValid (parsed: any, value: any): parsed is Date
  {
    return parsed instanceof Date && isFinite(parsed.getTime());
  }

  protected getComparator (a: Date, b: Date): number
  {
    return a.getTime() - b.getTime();
  }

  public isWeekday (weekdays: Value<number[]>): this
  {
    return this.is(value => resolve(weekdays).indexOf(value.getDay()) !== -1).message('isWeekday');
  }

  public isDayOfMonth (dayOfMonths: Value<number[]>): this
  {
    return this.is(value => resolve(dayOfMonths).indexOf(value.getDate()) !== -1).message('isDayOfMonth');
  }

  public isMonth (months: Value<number[]>): this
  {
    return this.is(value => resolve(months).indexOf(value.getMonth()) !== -1).message('isMonth');
  }

  public endOfDay (): this
  {
    return this.transform(value => 
    {
      value.setHours(23, 59, 59, 999);
      return value;
    });
  }

  public startOfDay (): this
  {
    return this.transform(value => 
    {
      value.setHours(0, 0, 0, 0);
      return value;
    });
  }

  public endOfWeek (): this
  {
    return this.transform(value => 
    {
      value.setDate(value.getDate() + (6 - value.getDay()));
      return value;
    });
  }

  public startOfWeek (): this
  {
    return this.transform(value => 
    {
      value.setDate(value.getDate() - value.getDay());
      return value;
    });
  }

  public endOfMonth (): this
  {
    return this.transform(value => 
    {
      value.setMonth(value.getMonth() + 1, 0);
      return value;
    });
  }

  public startOfMonth (): this
  {
    return this.transform(value => 
    {
      value.setDate(1);
      return value;
    });
  }

  public endOfYear (): this
  {
    return this.transform(value => 
    {
      value.setMonth(12, 0);
      return value;
    });
  }

  public startOfYear (): this
  {
    return this.transform(value => 
    {
      value.setMonth(0, 1);
      return value;
    });
  }

  public getTime (): ValidatorNumber
  {
    return this.transform<number, ValidatorNumber>(value => value.getTime());
  }

}
