
import { expect } from 'chai';
import 'mocha';

import { obj, str } from '../src';


describe('Object', () => 
{

  it('add', async () => 
  {
    const a = obj().props({
      x: str(),
    }).optional().add({
      y: str(),
    });

    const b = {
      x: 'Hello',
      y: 'World'
    };

    expect(await a.runAsTuple(b)).to.deep.equal([ 
      true, {
        x: 'Hello', 
        y: 'World'
      }, 
      undefined,
      []
    ]);
  });

  it('add after optional', async () => 
  {
    const a = obj().props({
      x: str(),
    }).optional().add({
      y: str(),
    });

    const b = {
      y: 'World'
    };

    expect(await a.runAsTuple(b)).to.deep.equal([ 
      true, {
        y: 'World'
      }, 
      undefined,
      []
    ]);
  });

  it('add after optional required missing', async () => 
  {
    const a = obj().props({
      x: str(),
    }).optional().add({
      y: str().required(),
    });

    const b = {
      x: 'World'
    };

    expect(await a.runAsTuple(b)).to.deep.equal([ 
      false, 
      undefined, {
        y: 'required'
      }, 
      [{
        message: 'required',
        path: ['y'],
        value: undefined,
      }]
    ]);
  });

});