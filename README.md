
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
  .required(() => [])
  .maxLength(4)
  .type(obj().required().props({
    id: str().required().trim().alpha(),
    age: int().optional().greaterThan(0),
    admin: bool().required(false)
  }))
;

const validValue = [
  { id: 'abcd', age: '23' },
  { id: 'abcd', admin: true },
  { id: ' abef ', admin: '1' }
]

const [pass, result, fail] = await arrayValidator.runAsTuple(validValue);

/*
pass = true
result = [
  { id: 'abcd', age: 23, admin: false },
  { id: 'abcd', admin: true },
  { id: 'abef', admin: true }]
fail = undefined
*/

const invalidValue = [
  { id: 45, age: -45, admin: 'WHAT' },
  null,
  { id: 'rte' }
];

const [pass, result, fail] = await arrayValidator.runAsTuple(invalidValue);

/*
pass = false
result = undefined
fail = [
  { id: 'alpha', age: 'greaterThan', admin: 'required' },
  'required',
  undefined // passed validation, not a failure
]
*/

```

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
