import { Validator } from '../Validator';
export declare function any(): ValidatorAny;
export declare class ValidatorAny extends Validator<any> {
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is any;
    protected getComparator(a: any, b: any): number;
}
