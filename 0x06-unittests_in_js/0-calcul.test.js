const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('whole numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('decimal and whole number (rounding)', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('two decimal (rounding)', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('two decimal (ceil)', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
})

