import { Validator } from '../Validator';
import { Comparator, Value, Check } from '../types';
export declare function arr<T extends any[] = unknown[]>(): ValidatorArray<T>;
export declare type ValidatorTupleTypes<T extends any[]> = {
    [I in keyof T]: T[I] extends {
        check: Check<infer R>;
    } ? R : unknown;
};
export declare type ValidatorForTypes<T extends Validator<any>[]> = {
    [I in keyof T]: Validator<T[I]>;
};
export declare class ValidatorArray<T extends any[]> extends Validator<T> {
    private typeValidators?;
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is T;
    protected getComparator(a: T, b: T): number;
    getTypeValidator(element: number): Validator<T> | undefined;
    getTypeComparator(element: number): Comparator<T> | undefined;
    type<E>(type: Validator<E>, removeAndIgnoreInvalid?: boolean): ValidatorArray<E[]>;
    types<E extends any[]>(types: ValidatorForTypes<E>, requireDivisibleAmount?: boolean, removeAndIgnoreInvalid?: boolean): ValidatorArray<E>;
    minLength(min: Value<number>): this;
    maxLength(max: Value<number>): this;
    every(every: (item: T, index: number, all: T[]) => boolean): this;
    some(some: (item: T, index: number, all: T[]) => boolean): this;
    reverse(): this;
    filter(filter: (item: T, index: number, all: T[]) => boolean): this;
    sort(sorter?: Comparator<T>): this;
    map<M>(mapper: (item: T[number]) => M): ValidatorArray<M[]>;
    unique(comparator?: Comparator<T>): this;
    removeDuplicates(comparator?: Comparator<T>): this;
}
