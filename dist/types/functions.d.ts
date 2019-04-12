import { GetMessage, Value } from './types';
export declare function isGetMessage<T>(x: any): x is GetMessage<T>;
export declare function resolve<T>(value: Value<T>): T;
export declare function trimIfString(x: any): any;
export declare function isString(x: any): x is string;
export declare function isEmpty(x: any): boolean;
export declare function isPlainObject(x: any): boolean;
export declare function isFunction(x: any): x is Function;
export declare function toArray<T>(x: T | T[]): T[];
