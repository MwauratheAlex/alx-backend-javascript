const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return a + b when given a and b', () => {
    assert.equal(calculateNumber(4, 5), 9);
  });
  it('rounds correctly', () => {
    assert.equal(calculateNumber(4.5, 5), 10);
    assert.equal(calculateNumber(4.4, 5), 9);
    assert.equal(calculateNumber(4, 5.2), 9);
    assert.equal(calculateNumber(4, 5.5), 10);
  });
});
