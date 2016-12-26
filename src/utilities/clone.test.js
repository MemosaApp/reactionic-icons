import { expect } from 'chai';
import cloneWithoutKeys from './clone';

describe('clone', () => {
  it('clones an object', () => {
    expect(cloneWithoutKeys({ a: 'a' })).to.be.deep.equal({ a: 'a' });
  });

  it('clones without keys', () => {
    expect(cloneWithoutKeys({ a: 'a', b: 'b' }, ['b'])).to.be.deep.equal({ a: 'a' });
  });
});
