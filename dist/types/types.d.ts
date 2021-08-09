export declare type Check<T> = (value: T, next: Next<T>, done: Done<T>, fail: Fail<T>, path: (string | number)[], addItem: (item: Item) => void) => Promise<void>;
export declare type Next<T> = (value: T) => Promise<void>;
export declare type Done<T> = (value: T) => void;
export declare type Fail<T> = (result: ResultFor<T>, path: (string | number)[]) => void;
export declare type GetMessage<T> = (value: T) => ResultFor<T>;
export declare type Comparator<T> = (a: T, b: T) => number;
export declare type Value<T> = T | (() => T);
export declare type Tuple<T> = [boolean, T | undefined, ResultFor<T> | undefined, Item[]];
export declare type Item = {
    path: (string | number)[];
    message: string;
    value?: any;
};
/**
 * Typescript doesn't allow circular references at the moment,
 * so the validation library is restricted to 3-dimensional arrays.
 */
export declare type Result = string | undefined;
export declare type ResultFor<A> = A extends [infer B] ? (B extends [infer C] ? (C extends [infer D] ? ResultObject<D>[] : C extends object ? ResultObject<C>[] : Result) : B extends object ? ResultObject<B>[] : Result) : A extends object ? ResultObject<A> : Result;
export declare type ResultObject<T> = Result | {
    [K in keyof T]?: ResultFor<T[K]>;
};
export declare type MergeObjects<A, B> = {
    [K in keyof B]: undefined extends B[K] ? K extends keyof A ? Exclude<B[K], undefined> | A[K] : B[K] : B[K];
} & {
    [K in keyof A]: K extends keyof B ? undefined extends B[K] ? Exclude<B[K], undefined> | A[K] : B[K] : A[K];
};
