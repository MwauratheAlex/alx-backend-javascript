
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('calls utils.calculateNumber once with correct values', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.returned(120)).to.be.true;
    spy.restore();
  });
});

