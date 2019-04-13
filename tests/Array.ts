
import { expect } from 'chai';
import 'mocha';

import { int, float, obj, arr, str, bool, geo, any } from '../src';



describe('Array', () => 
{

  it('oneToMany', async () => 
  {
    const a = obj().json().required().props({
      interests: arr().required(() => []).type(str().required().trim().minLength(2)).maxLength(5),
      search_location: geo(false)
    });

    const b = {
      interests: 'Woodworking',
      search_location: '{"lat":1, "lng":2}'
    };

    expect(await a.runAsTuple(b)).to.deep.equal([ 
      true, {
        interests: ['Woodworking'],
        search_location: {
          type: 'Point',
          coordinates: [2, 1]
        }
      }, 
      undefined
    ]);


  });

});