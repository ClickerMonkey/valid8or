import { Validator } from '../Validator';
export declare function bool(): ValidatorBoolean;
export declare class ValidatorBoolean extends Validator<boolean> {
    private truthy;
    private falsy;
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is boolean;
    protected getComparator(a: boolean, b: boolean): number;
    withTruthy(truthy: RegExp): this;
    withFalsy(falsy: RegExp): this;
}
