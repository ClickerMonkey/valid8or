import { Validator } from '../Validator';
import { Value } from '../types';
export declare function str(): ValidatorString;
export declare class ValidatorString extends Validator<string> {
    protected parse(value: any): any;
    protected isValid(parsed: any, value: any): parsed is string;
    protected getComparator(a: string, b: string): number;
    insensitive(): this;
    exists(): this;
    isLower(): this;
    isUpper(): this;
    like(pattern: Value<RegExp>): this;
    unlike(pattern: Value<RegExp>): this;
    minLength(min: Value<number>): this;
    maxLength(max: Value<number>): this;
    colorHex(allowHash?: boolean, requireHash?: boolean): this;
    colorShortHex(allowHash?: boolean, requireHash?: boolean): this;
    colorRGB(percent?: boolean): this;
    colorRGBA(percent?: boolean): this;
    color(percent?: boolean, allowHash?: boolean, requireHash?: boolean): this;
    linkless(): this;
    uuid(): this;
    ipv4(): this;
    ipv6(): this;
    isbn(): this;
    phoneUS(): this;
    zipUS(): this;
    alphaNumeric(): this;
    alpha(): this;
    token(): this;
    hex(): this;
    base64(): this;
    http(): this;
    https(): this;
    url(requireProtocol?: boolean): this;
    email(): this;
    creditCard(): this;
    replace(pattern: Value<RegExp>, replacement: Value<string>): this;
    truncate(maxLength: number): this;
    trim(): this;
    ltrim(): this;
    rtrim(): this;
    lower(): this;
    upper(): this;
    strip(pattern: RegExp): this;
    encode(): this;
    encodeComponent(): this;
    decode(): this;
    decodeComponent(): this;
    normalizeEmail(): this;
}
