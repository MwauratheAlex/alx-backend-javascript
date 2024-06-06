const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('adds properly', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('subs properly', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('divides properly', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('returns error', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
