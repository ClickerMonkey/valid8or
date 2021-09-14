
import { GetMessage, Value } from './types';


export function isGetMessage<T> (x: any): x is GetMessage<T>
{
  return isFunction(x);
}

export function resolve<T> (value: Value<T>): T
{
  return isFunction(value) ? value() : value;
}

export function trimIfString (x: any): any
{
  return isString(x) ? x.trim() : x;
}

export function isString (x: any): x is string
{
  return typeof x === 'string';
}

export function isEmpty (x: any): boolean
{
  return isString(x) 
    ? x.trim().length === 0 
    : (x === undefined || x === null);
}

export function isPlainObject (x: any): boolean
{
  return x !== null && !Array.isArray(x) && typeof x === 'object';
}

export function isFunction (x: any): x is Function
{
  return typeof x === 'function';
}

export function toArray<T> (x: T | T[]): T[]
{
  return Array.isArray(x) ? x : (isEmpty(x) ? [] : [x]);
}
