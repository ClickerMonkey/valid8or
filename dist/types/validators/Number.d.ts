import { Validator } from '../Validator';
export declare function int(): ValidatorNumber;
export declare function float(): ValidatorNumber;
export declare class ValidatorNumber extends Validator<number> {
    parser: (value: any) => number;
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is number;
    protected getComparator(a: number, b: number): number;
    withParser(parser: (value: any) => number): this;
    isPositive(): this;
    isNegative(): this;
    floor(): this;
    abs(): this;
    neg(): this;
    ceil(): this;
    round(): this;
}
