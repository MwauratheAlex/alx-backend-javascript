const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('calls utils.calculateNumber once with correct values', () => {
    const UtilsStub = sinon.stub(Utils, "calculateNumber").returns(10);
    const logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).true;
    expect(logSpy.calledOnceWith('The total is: 10')).true;
    UtilsStub.restore();
    logSpy.restore();
  });
  it('calculateNumber works', () => {
    expect(Utils.calculateNumber('SUM', 100, 120)).to.equal(220);
  });
});
