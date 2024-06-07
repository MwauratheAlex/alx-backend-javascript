const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('stub for utils.calculateNumber once with correct values', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.callsFake((a, b) => 10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
