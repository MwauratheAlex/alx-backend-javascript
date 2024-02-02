const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('calls utils.calculateNumber once with correct values', () => {
    const UtilsSpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(UtilsSpy.calculateNumber.calledOnceWith('SUM', 100, 20)).true;
  });
});
