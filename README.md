
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
