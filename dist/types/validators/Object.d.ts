import { Validator } from '../Validator';
import { MergeObjects, GetMessage, Check } from '../types';
export declare type ValidatorMap<T> = {
    [P in keyof T]?: Validator<T[P]>;
};
export declare function obj<T extends object = {}>(): ValidatorObject<T>;
export declare class ValidatorObject<T extends object> extends Validator<T> {
    properties?: ValidatorMap<T>;
    constructor(check: Check<T>, parent?: Validator<T>, getMessage?: GetMessage<T>);
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is T;
    protected getComparator(a: T, b: T): number;
    add<P extends object = {}>(additionalProps: ValidatorMap<P>): ValidatorObject<MergeObjects<T, P>>;
    props<P extends object = {}>(overrideProps: ValidatorMap<P>): ValidatorObject<P>;
    instanceOf(type: new (...args: any[]) => T): this;
    wrap<O extends object = T>(type: new (value: T) => O): ValidatorObject<O>;
}
