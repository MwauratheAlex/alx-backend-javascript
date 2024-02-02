const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment.js');
const sinon = require('sinon');

describe ('send payment to api', () => {
  let logSpy;
  beforeEach(() => {
    if (!logSpy) {
      logSpy = sinon.spy(console, 'log');
    }
  });
  afterEach(() => {
    logSpy.resetHistory();
  });
  it("check console log called once with ...is: 120", () => {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWith('The total is: 120')).true;
  });
  it("check console log called once ...is: 20", () => {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnceWith('The total is: 20')).true;
  });
});
