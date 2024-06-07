const Sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");
const { expect } = require("chai");

describe('Payment', () => {
  let spy;
  beforeEach(() => {
    spy = Sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });
  it("sendPaymentRequestToApi(100, 20) calls console.log correctly", () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it("sendPaymentRequestToApi(10, 10) calls console.log correctly", () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
