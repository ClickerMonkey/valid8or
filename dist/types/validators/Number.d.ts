import { Validator } from '../Validator';
export declare function int<N extends number = number>(): ValidatorNumber<N>;
export declare function float<N extends number = number>(): ValidatorNumber<N>;
export declare class ValidatorNumber<N extends number = number> extends Validator<N> {
    parser: (value: any) => number;
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is N;
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
