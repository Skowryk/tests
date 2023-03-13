import { TestClass } from './index';
import { expect } from 'chai';

describe('Tests', () => {
  it('sample', () => {
    const options = new TestClass();
    expect(options.writeMe()).to.equal('hello me!!');
  });
});