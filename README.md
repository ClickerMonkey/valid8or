
<p align="center">
<img src="https://img.shields.io/npm/v/valid8or.svg">
<img src="https://img.shields.io/npm/l/valid8or.svg">
<img src="https://travis-ci.org/ClickerMonkey/valid8or.svg?branch=master">
</p>

## valid8or

A validator and transformer in TypeScript/JS for simple and complex data types.

### Example

```typescript
const arrayValidator = arr()
  .required(() => [])                       // an array is required, but if undefined is given get a default value of []
  .maxLength(4)                             // the array cannot contain any more than 4 elements
  .type(                                    // the type of the elements in the array
    obj().required().props({                // must be non-null non-undefined objects
      id: str().required().trim().alpha(),  // the id is required, it will be trimmed, and tested for alpha characters only
      age: int().optional().greaterThan(0), // the age is optional, so if it doesn't look like an int, ignore greaterThan
      admin: bool().required(false)         // a valid admin value is expected (true/y/yes/1/false/n/no/0), but if it's missing from the object then set admin to false
    }
  ))
;

const validValue = [
  { id: 'abcd', age: '23' },
  { id: 'abcd', admin: true },
  { id: ' abef ', admin: '1' }
]

const [pass, result, fail, items] = await arrayValidator.runAsTuple(validValue);

/*
pass = true
result = [
  { id: 'abcd', age: 23, admin: false },
  { id: 'abcd', admin: true },
  { id: 'abef', admin: true }]
fail = undefined
items = []
*/

const invalidValue = [
  { id: 45, age: -45, admin: 'WHAT' },
  null,
  { id: 'rte' }
];

const [pass, result, fail, items] = await arrayValidator.runAsTuple(invalidValue);

/*
pass = false
result = undefined
fail = [
  { id: 'alpha', age: 'greaterThan', admin: 'required' },
  'required',
  undefined // passed validation, not a failure
]
items = [
  { path: [0, 'id'], message: 'alpha', value: 45 },
  { path: [0, 'age'], message: 'greaterThan', value: -45 },
  { path: [0, 'admin'], message: 'required', value: 'WHAT' },
  { path: [1], message: 'required', value: null }
]
*/

```

## API

### Validator Generators
- `int()`: ValidatorNumber (type `number`)
- `float()`: ValidatorNumber (type `number`)
- `str()`: ValidatorString (type `string`)
- `obj<T>()`: ValidatorObject<T> (type `T`)
- `arr<T>()`: ValidatorArray<T> (type `T`)
- `bool()`: ValidatorBoolean (type `boolean`)
- `date()`: ValidatorDate (type `Date`)
- `geo()`: ValidatorObject (type `GeoInput -> GeoOutput`)
- `any()`: ValidatorAny (type `any`)

### Index

#### Validators
[`required`](required) [`optional`](optional) [`is`](is) [`oneOf`](oneOf) [`notOneOf`](notOneOf) [`equals`](equals) [`greaterThan`](greaterThan) [`greaterThanEqual`](greaterThanEqual) [`between`](between) [`min`](min) [`max`](max) [`fail`](fail) [`or`](or) [`validate`](validate) [`eval`](eval) [`type`](type) [`minLength`](minLength) [`maxLength`](maxLength) [`every`](every) [`some`](some) [`unique`](unique) [`isWeekday`](isWeekday) [`isDayOfMonth`](isDayOfMonth) [`isMonth`](isMonth) [`getTime`](getTime) [`isPositive`](isPositive) [`isNegative`](isNegative) [`props`](props) [`instanceOf`](instanceOf) [`wrap`](wrap) [`insensitive`](insensitive) [`exists`](exists) [`isLower`](isLower) [`isUpper`](isUpper) [`like`](like) [`unlike`](unlike) [`minLength`](minLength) [`maxLength`](maxLength) [`colorHex`](colorHex) [`colorShortHex`](colorShortHex) [`colorRGB`](colorRGB) [`colorRGBA`](colorRGBA) [`color`](color) [`linkless`](linkless) [`uuid`](uuid) [`ipv4`](ipv4) [`ipv6`](ipv6) [`ip`](ip) [`isbn`](isbn) [`phoneUS`](phoneUS) [`zipUS`](zipUS) [`alphaNumeric`](alphaNumeric) [`alpha`](alpha) [`token`](token) [`hex`](hex) [`base64`](base64) [`http`](http) [`https`](https) [`url`](url) [`email`](email) [`creditCard`](creditCard)

#### Transformers
[`transform`](transform) [`json`](json) [`nullify`](nullify) [`remove`](remove) [`set`](set) [`reverse`](reverse) [`filter`](filter) [`sort`](sort) [`map`](map) [`removeDuplicates`](removeDuplicates) [`endOfDay`](endOfDay) [`startOfDay`](startOfDay) [`endOfWeek`](endOfWeek) [`startOfWeek`](startOfWeek) [`endOfMonth`](endOfMonth) [`startOfMonth`](startOfMonth) [`endOfYear`](endOfYear) [`startOfYear`](startOfYear) [`floor`](floor) [`abs`](abs) [`neg`](neg) [`ceil`](ceil) [`round`](round) [`replace`](replace) [`truncate`](truncate) [`trim`](trim) [`ltrim`](ltrim) [`rtrim`](rtrim) [`lower`](lower) [`upper`](upper) [`strip`](strip) [`encode`](encode) [`encodeComponent`](encodeComponent) [`decode`](decode) [`decodeComponent`](decodeComponent) [`normalizeEmail`](normalizeEmail)

#### Modifiers
[`message`](message) [`withComparator`](withComparator) [`reverseComparator`](reverseComparator) [`withTruthy`](withTruthy) [`withFalsy`](withFalsy) 

#### Validation
[`run`](run) [`runAsPromise`](runAsPromise) [`runAsTuple`](runAsTuple) 

Every validator has the following methods:

- `required(defaults?)`: Evaluates the value and requires a valid one.
- `optional(defaults?)`: Evaluates the value and if it's not valid ignores the following validations and transforms.
- `is((value) => valid)`: Does a simple validation
- `transform((currentValue) => newValue)`: Transforms a value into another.
- `oneOf([])`: Checks that the value exists in the array.
- `oneOf(() => [])`: Checks that the value exists in the array returned when the function is invoked.
- `notOneOf([])`: Checks that the value does not exist in the array.
- `notOneOf(() => [])`: Checks that the value does not exist in the array returned when the function is invoked.
- `equals(expects)`: Checks the value equals expects.
- `equals(() => expects)`: Checks the value equals the expects value returned when the function is invoked.
- `greaterThan(expects)`: Checks the value is greater than expects.
- `greaterThan(() => expects)`: Checks the value is greater than the expects value returned when the function is invoked.
- `greaterThanEqual(expects)`: Checks the value is greater than or equal to expects.
- `greaterThanEqual(() => expects)`: Checks the value is greater than or equal to expects value returned when the function is invoked.
- `between(min, max)`: Checks the value is inclusively between the given minimum and maximum values (if they are functions they are invoked).
- `min(minimumAllowed)`
- `max(maximumAllowed)`
- `fail()`
- `or(validator => validators[])`
- `json()`
- `nullify()`
- `remove()`
- `set(newValue)`
- `encode()`
- `encodeComponent()`
- `decode()`
- `decodeComponent()`
- `validate(check)`: A custom validation check.
- `eval(required, defaults?)`: Evaluates the value by parsing and checking it.
- `message(string)`: Follows a validation and if the validation fails this will be the message returned in the failure value.
- `message((value) => string)`: Follows a validation and instead of a constant string, the value passed can be incorporated into the message.
- `withComparator(comparator)`: Sets a custom comparator to be used for the following validation.
- `reverseComparator()`: Reverses the logic for the next validation.
- `runAsPromise(testValue)`
- `runAsTuple(testValue)`

### ValidatorAny

### ValidatorArray
- `type(typeValidator)`
- `minLength(min)`
- `maxLength(max)`
- `every(every)`
- `some(some)`
- `reverse()`
- `filter(filter)`
- `sort(sorter?)`
- `map(mapper)`
- `unique(comparator?)`
- `removeDuplicates(comparator?)`

### ValidatorBoolean
- `withTruthy(regex)`
- `withFalsy(regex)`

### ValidatorDate
- `isWeekday(weekdays)`
- `isDayOfMonth(weekdays)`
- `isMonth(weekdays)`
- `endOfDay()`
- `startOfDay()`
- `endOfWeek()`
- `startOfWeek()`
- `endOfMonth()`
- `startOfMonth()`
- `endOfYear()`
- `startOfYear()`
- `getTime()`

### ValidatorNumber
- `isPositive()`
- `isNegative()`
- `floor()`
- `abs()`
- `neg()`
- `ceil()`
- `round()`

### ValidatorObject
- `props({ prop: Validator })`
- `instanceOf(type)`
- `wrap(type)`

### ValidatorString
- `insensitive()`
- `exists()`
- `isLower()`
- `isUpper()`
- `like(regex)`
- `unlike(regex)`
- `minLength(length)`
- `maxLength(length)`
- `colorHex(allowHash?, requireHash?)`
- `colorShortHex(allowHash?, requireHash?)`
- `colorRGB(percent?)`
- `colorRGBA(percent?)`
- `color(percent?, allowHash?, requireHash?)`
- `linkless()`
- `uuid()`
- `ipv4()`
- `ipv6()`
- `ip()`
- `isbn()`
- `phoneUS()`
- `zipUS()`
- `alphaNumeric()`
- `alpha()`
- `token()`
- `hex()`
- `base64()`
- `http()`
- `https()`
- `url(requireProtocol?)`
- `email()`
- `creditCard()`
- `replace(regex, replacement)`
- `truncate(maxLength)`
- `trim()`
- `ltrim()`
- `rtrim()`
- `lower()`
- `upper()`
- `strip(regex)`
- `normalizeEmail()`

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
