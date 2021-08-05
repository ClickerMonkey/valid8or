import { Validator } from '../Validator';
export declare type ValidatorMap<T> = {
    [P in keyof T]?: Validator<T[P]>;
};
export declare function obj<T extends object = {}>(): ValidatorObject<T>;
export declare class ValidatorObject<T extends object> extends Validator<T> {
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is T;
    protected getComparator(a: T, b: T): number;
    props<P extends object = {}>(props: ValidatorMap<P>): ValidatorObject<P>;
    instanceOf(type: new (...args: any[]) => T): this;
    wrap<O extends object = T>(type: new (value: T) => O): ValidatorObject<O>;
}
