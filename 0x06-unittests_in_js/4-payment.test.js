const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('stub for utils.calculateNumber once with correct values', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(120);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
