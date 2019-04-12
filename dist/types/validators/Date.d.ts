import { Validator } from '../Validator';
import { Value } from '../types';
import { ValidatorNumber } from './Number';
export declare function date(): ValidatorDate;
export declare class ValidatorDate extends Validator<Date> {
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is Date;
    protected getComparator(a: Date, b: Date): number;
    isWeekday(weekdays: Value<number[]>): this;
    isDayOfMonth(dayOfMonths: Value<number[]>): this;
    isMonth(months: Value<number[]>): this;
    endOfDay(): this;
    startOfDay(): this;
    endOfWeek(): this;
    startOfWeek(): this;
    endOfMonth(): this;
    startOfMonth(): this;
    endOfYear(): this;
    startOfYear(): this;
    getTime(): ValidatorNumber;
}
