import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('calculateNumber', () => {
  it('whole numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('second number rounded up', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('second number rounded down', () => {
    assert.equal(calculateNumber(1, 3.2), 4);
  });
  it('first number rounded down, second number rounded up', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('both numbers rounded up', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('both numbers rounded down', () => {
    assert.equal(calculateNumber(1.3, 3.3), 4);
  });
})

