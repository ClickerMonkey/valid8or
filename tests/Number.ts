
import { expect } from 'chai';
import 'mocha';

import { int, obj, arr, str, bool, geo, any } from '../src';



describe('valid8', () => 
{
  it('works', async () => 
  {
    const a = obj().required().props({
      limit: int().required(0).min(0)
    });

    const aNoDefault = obj().required().props({
      limit: int().required().min(0)
    });
    
    expect(await a.runAsTuple({
      limit: '34'
    })).to.deep.equal(
      [ true, { limit: 34 }, undefined, [] ]
    );
  
    expect(await a.runAsTuple({
      limit: -10
    })).to.deep.equal(
      [ false, undefined, { limit: 'min' }, [{ path: ['limit'], message: 'min', value: -10 }] ]
    );
  
    expect(await aNoDefault.runAsTuple({
      limit: null,
    })).to.deep.equal(
      [ false, undefined, { limit: 'required' }, [{ path: ['limit'], message: 'required', value: null }] ]
    );

    expect(await a.runAsTuple({
      limit: null,
    })).to.deep.equal(
      [ true, { limit: 0 }, undefined, [] ]
    );
  
    expect(await a.runAsTuple({
  
    })).to.deep.equal(
      [ true, { limit: 0 }, undefined, [] ]
    );
  
    expect(await aNoDefault.runAsTuple({
  
    })).to.deep.equal(
      [ false, undefined, { limit: 'required' }, [{ path: ['limit'], message: 'required', value: undefined }] ]
    );
  
    const b = arr()
      .required()
      .maxLength(4)
      .type(obj().required().props({
        id: str().required().trim().uuid(),
        age: int().optional().greaterThan(0),
        admin: bool().required()
      }))
    ;
  
    expect(await b.runAsTuple(undefined)).to.deep.equal(
      [ false, undefined, 'required', [{ path: [], message: 'required', value: undefined }] ]
    );
  
    expect(await b.runAsTuple([
      { id: '6a2f41a3-c54c-fce8-32d2-0324e1c32e22', age: 21 }
    ])).to.deep.equal(
      [ false, undefined, [ { admin: 'required' } ], [{ path: [0, 'admin'], message: 'required', value: undefined }] ]
    );
  
    expect(await b.runAsTuple([
      { id: '6a2f41a3-c54c-fce8-32d2-0324e1c32e22', admin: 1 },
      { id: '   6a2f41a3-c54c-fce8-32d2-0324e1c32e22', admin: 'y' }
    ])).to.deep.equal(
      [ true,
        [ { id: '6a2f41a3-c54c-fce8-32d2-0324e1c32e22', admin: true },
          { id: '6a2f41a3-c54c-fce8-32d2-0324e1c32e22', admin: true } ],
        undefined,
        [] ]
    );
  
    expect(await b.runAsTuple([
      {},
      { id: '   6a2f41a3-c54c-fce8-32d2-0324e1c32e22', age: -34, admin: 'ctg' },
      null,
      { id: '6f41a3-c54c-fce8-32d2-0324e1c32e22', age: 't' }
    ])).to.deep.equal(
      [ false,
        undefined,
        [ { id: 'required', admin: 'required' },
          { age: 'greaterThan', admin: 'required' },
          'required',
          { id: 'uuid', admin: 'required' } ],
        [ { path: [0, 'id'], message: 'required', value: undefined },
          { path: [0, 'admin'], message: 'required', value: undefined },
          { path: [1, 'age'], message: 'greaterThan', value: -34 },
          { path: [1, 'admin'], message: 'required', value: 'ctg' },
          { path: [2], message: 'required', value: null },
          { path: [3, 'id'], message: 'uuid', value: '6f41a3-c54c-fce8-32d2-0324e1c32e22' },
          { path: [3, 'admin'], message: 'required', value: undefined }
        ] 
      ]
    );
  
    const c = geo(false);
  
    expect(await c.runAsTuple(undefined)).to.deep.equal(
      [true, undefined, undefined, [] ]
    );
  
    expect(await c.runAsTuple({})).to.deep.equal(
      [ false, undefined, { latitude: 'Latitude is required', longitude: 'Longitude is required' }, [
        { path: ['latitude'], message: 'Latitude is required', value: undefined },
        { path: ['longitude'], message: 'Longitude is required', value: undefined },
      ] ]
    );
  
    expect(await c.runAsTuple({
      latitude: 45,
      longitude: 85
    })).to.deep.equal(
      [ true, { type: 'Point', coordinates: [ 85, 45 ] }, undefined, [] ]
    );
  
    expect(await c.runAsTuple({
      latitude: 45,
      longitude: -185
    })).to.deep.equal(
      [ false, undefined, { longitude: 'Longitude must be between -180 and 180 degrees: -185' }, [
        { path: ['longitude'], message: 'Longitude must be between -180 and 180 degrees: -185', value: -185 },
      ] ]
    );
  });

  it('cleans', async () => 
  {
    const a = obj().props({
      name: any().remove()
    });

    expect(await a.runAsTuple({
      name: 'Phil',
      age: 30
    })).to.deep.equal(
      [ true, { age: 30 }, undefined, [] ]
    );

  });

  it('or', async () => {
    
    const a = int().optional().or(v => [
      v.lessThan(0).abs(),
      v.is(x => x % 2 === 0).nullify(),
      v
    ]);

    expect(await a.runAsTuple(-23)).to.deep.equal(
      [ true, 23, undefined, [] ]
    );

    expect(await a.runAsTuple(23)).to.deep.equal(
      [ true, 23, undefined, [] ]
    );

    expect(await a.runAsTuple(20)).to.deep.equal(
      [ true, null, undefined, [] ]
    );
  });

  it('removeDuplicates', async () => {

    const a = arr().required().type(int().required()).removeDuplicates().sort();

    expect(await a.runAsPromise([8, '2', 3, 6, '3', 4])).to.deep.equal(
      [2, 3, 4, 6, 8]
    );
  })
})