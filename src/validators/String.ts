
import { isString, resolve } from '../functions';
import { Validator } from '../Validator';
import { Value } from '../types';


export function str<S extends string = string>(): ValidatorString<S>
{
  return new ValidatorString<S>(async (value, next) => next(value));
}

export class ValidatorString<S extends string = string> extends Validator<S>
{

  protected parse (value: any): any
  {
    return value === undefined || value === null ? value : (value + '');
  }

  protected isValid (parsed: any, value: any): parsed is S
  {
    return isString(parsed);
  }

  protected getComparator (a: string, b: string): number
  {
    return a.localeCompare(b);
  }

  public insensitive (): this
  {
    return this.withComparator((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }

  public exists (): this
  {
    return this.is(value => value.length > 0).message('exists');
  }

  public isLower (): this
  {
    return this.is(value => value.toLowerCase() === value).message('isLower');
  }

  public isUpper (): this
  {
    return this.is(value => value.toUpperCase() === value).message('isUpper');
  }

  public like (pattern: Value<RegExp>): this
  {
    return this.is(value => resolve(pattern).test(value)).message('like');
  }

  public unlike (pattern: Value<RegExp>): this
  {
    return this.is(value => !resolve(pattern).test(value)).message('unlike');
  }

  public minLength (min: Value<number>): this
  {
    return this.is(value => value.length >= resolve(min)).message('minLength');
  }

  public maxLength (max: Value<number>): this
  {
    return this.is(value => value.length <= resolve(max)).message('maxLength');
  }
  
  public colorHex (allowHash: boolean = true, requireHash: boolean = false): this
  {
    return this.like(allowHash
      ? requireHash 
        ? /^#[0-9a-f]{6}$/i
        : /^#?[0-9a-f]{6}$/i
      : /^[0-9a-f]{6}$/i
    ).message('colorHex');
  }

  public colorShortHex (allowHash: boolean = true, requireHash: boolean = false): this
  {
    return this.like(allowHash
      ? requireHash 
        ? /^#[0-9a-f]{3}$/i
        : /^#?[0-9a-f]{3}$/i
      : /^[0-9a-f]{3}$/i
    ).message('colorShortHex');
  }

  public colorRGB (percent: boolean = false): this
  {
    return this.like(percent
      ? /^rgb\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*\)$/i
      : /^rgb\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*\)$/i
    ).message('colorRGB');
  }

  public colorRGBA (percent: boolean = false): this
  {
    return this.like(percent
      ? /^rgba\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*[01]?\.?\d*\s*\)$/i
      : /^rgba\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*[01]?\.?\d*\s*\)$/i
    ).message('colorRGBA');
  }

  public color (percent: boolean = false, allowHash: boolean = true, requireHash: boolean = false): this
  {
    return this.or(v => [
      v.colorHex(allowHash, requireHash),
      v.colorShortHex(allowHash, requireHash),
      v.colorRGB(percent),
      v.colorRGBA(percent)
    ]).message('color');
  }

  public linkless (): this
  {
    return this.unlike(/(\.|dot)\s*([a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)/i).message('linkless');
  }

  public uuid (): this
  {
    return this.like(/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/).message('uuid');
  }

  public ipv4 (): this
  {
    return this.like(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).message('ipv4');
  }

  public ipv6 (): this
  {
    return this.like(/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/).message('ipv6');
  }

  public ip (): this
  {
    return this.or(v => [v.ipv4(), v.ipv6()]).message('ip');
  }

  public isbn (): this
  {
    return this.like(/^(ISBN\s)?(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/).message('isbn');
  }

  public phoneUS (): this
  {
    return this.like(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/).message('phoneUS');
  }

  public zipUS (): this
  {
    return this.like(/^\d{5}$|^\d{5}-\d{4}$/).message('zipUS');
  }

  public alphaNumeric (): this
  {
    return this.like(/^[a-zA-Z0-9]*$/).message('alphaNumeric');
  }

  public alpha (): this
  {
    return this.like(/^[a-zA-Z]*$/).message('alpha');
  }

  public token (): this
  {
    return this.like(/^\w*$/).message('token');
  }

  public hex (): this
  {
    return this.like(/^[0-9a-f]$/i).message('hex');
  }

  public base64 (): this
  {
    return this.like(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/).message('base64');
  }

  public http (): this
  {
    return this.like(/http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).message('http');
  }

  public https (): this
  {
    return this.like(/https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).message('https');
  }

  public url (requireProtocol = false): this
  {
    return (requireProtocol 
      ? this.or(v => [v.http(), v.https()])
      : this.like(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)
    ).message('url');
  }
  
  public email (): this
  {
    return this.like( /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/).message('email');
  }

  public creditCard (): this
  {
    return this.like(/^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/).message('creditCard');
  }

  public replace (pattern: Value<RegExp>, replacement: Value<string>): this
  {
    return this.transform(value => value.replace(resolve(pattern), resolve(replacement)));
  }

  public truncate (maxLength: number): this
  {
    return this.transform(value => value.length <= maxLength ? value : value.substring(0, maxLength));
  }

  public trim (): this
  {
    return this.transform(value => value.trim());
  }

  public ltrim (): this
  {
    return this.transform(value => value.replace(/^\s+/, ''));
  }

  public rtrim (): this
  {
    return this.transform(value => value.replace(/\s+$/, ''));
  }

  public lower (): this
  {
    return this.transform(value => value.toLowerCase());
  }

  public upper (): this
  {
    return this.transform(value => value.toUpperCase());
  }

  public strip (pattern: RegExp): this
  {
    return this.transform(value => value.replace(pattern, ''));
  }

  public normalizeEmail (): this
  {
    const PLUS_ONLY = /\+.*$/;
    const PLUS_AND_DOT = /\.|\+.*$/g;
    const normalizeableProviders: any = {
      'gmail.com': {
        'cut': PLUS_AND_DOT
      },
      'googlemail.com': {
        'cut': PLUS_AND_DOT,
        'aliasOf': 'gmail.com'
      },
      'hotmail.com': {
        'cut': PLUS_ONLY
      },
      'live.com': {
        'cut': PLUS_AND_DOT
      },
      'outlook.com': {
        'cut': PLUS_ONLY
      }
    };

    return this.transform(value => 
    {
      var email = value.toLowerCase();
      var emailParts = email.split(/@/);

      if (emailParts.length !== 2) {
        return value;
      }

      var username = emailParts[0];
      var domain = emailParts[1];

      if (normalizeableProviders[domain]) {
        if (normalizeableProviders[domain]['cut']) {
          username = username.replace(normalizeableProviders[domain].cut, '');
        }
        if (normalizeableProviders[domain]['aliasOf']) {
          domain = normalizeableProviders[domain].aliasOf;
        }
      }

      return username + '@' + domain;
    });
  }

}