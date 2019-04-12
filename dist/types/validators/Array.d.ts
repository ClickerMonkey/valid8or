import { Validator } from '../Validator';
import { Comparator, Value } from '../types';
export declare function arr<T = any>(): ValidatorArray<T>;
export declare class ValidatorArray<T> extends Validator<T[]> {
    private typeValidator;
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is T[];
    protected getComparator(a: T[], b: T[]): number;
    getTypeValidator(): Validator<T> | undefined;
    getTypeComparator(): Comparator<T> | undefined;
    type(type: Validator<T>, removeAndIgnoreInvalid?: boolean): this;
    minLength(min: Value<number>): this;
    maxLength(max: Value<number>): this;
    every(every: (item: T, index: number, all: T[]) => boolean): this;
    some(some: (item: T, index: number, all: T[]) => boolean): this;
    reverse(): this;
    filter(filter: (item: T, index: number, all: T[]) => boolean): this;
    sort(sorter?: Comparator<T>): this;
    map<M>(mapper: (item: T) => M): ValidatorArray<M>;
    unique(comparator?: Comparator<T>): this;
    removeDuplicates(comparator?: Comparator<T>): this;
}
