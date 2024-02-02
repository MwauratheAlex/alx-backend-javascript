const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('1-calcul', () => {
  it('sum whole numbers', () => {
    expect(calculateNumber('SUM', 4, 5)).to.equal(9);
  });
  it('subtract whole numbers', () => {
    expect(calculateNumber('SUBTRACT', 9, 5)).to.equal(4);
  });
  it('divide whole numbers', () => {
    expect(calculateNumber('DIVIDE', 15, 5)).to.equal(3);
  });
  it('divide error, second rounded to 0', () => {
    expect(calculateNumber('DIVIDE', 4, 0.4)).to.equal('Error');
  });
});
