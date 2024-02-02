const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('1-calcul', () => {
  it('sum whole numbers', () => {
    assert.equal(calculateNumber('SUM', 4, 5), 9);
  });
  it('subtract whole numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 9, 5), 4);
  });
  it('divide whole numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 15, 5), 3);
  });
  it('divide error, second rounded to 0', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0.4), 'Error');
  });
});
