
import { expect } from 'chai';
import 'mocha';

import { obj, arr, str, geo, int, bool } from '../src';



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
      search_location: '{"latitude":1, "longitude":2}'
    };

    expect(await a.runAsTuple(b)).to.deep.equal([ 
      true, {
        interests: ['Woodworking'],
        search_location: {
          type: 'Point',
          coordinates: [2, 1]
        }
      }, 
      undefined,
      []
    ]);


  });

  it('tuple', () => 
  {
    arr().types<[number, 'a' | 'b', boolean]>([
      int(),
      str<'a' | 'b'>(),
      bool()
    ]);
  });

});