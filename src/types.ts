

export type Check<T> = (value: T, next: Next<T>, done: Done<T>, fail: Fail<T>) => Promise<void>;

export type Next<T> = (value: T) => Promise<void>;

export type Done<T> = (value: T) => void;

export type Fail<T> = (result: ResultFor<T>) => void;

export type GetMessage<T> = (value: T) => ResultFor<T>;

export type Comparator<T> = (a: T, b: T) => number;

export type Value<T> = T | (() => T);

export type Tuple<T> = [boolean, T | undefined, ResultFor<T> | undefined];

/**
 * Typescript doesn't allow circular references at the moment,
 * so the validation library is restricted to 3-dimensional arrays. 
 */
export type Result = string | undefined;

export type ResultFor<A> =
  A extends [infer B] ? (
    B extends [infer C] ? (
      C extends [infer D] ? ResultObject<D>[] :
      C extends object ? ResultObject<C>[] : Result) : 
    B extends object ? ResultObject<B>[] : Result) :
  A extends object ? ResultObject<A> : Result;

export type ResultObject<T> = Result | { [K in keyof T]?: ResultFor<T[K]> };

