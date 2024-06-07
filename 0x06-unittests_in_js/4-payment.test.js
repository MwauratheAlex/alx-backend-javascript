/* eslint-disable */
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Util = require('./utils');
const sinon = require('sinon');

describe('using sinon spy', () => {
  // const spy = sinon.spy(sendPaymentRequestToApi);
  // eslint-disable-next-line no-unused-vars
  const calMethod = sinon.stub(Util, 'calculateNumber').callsFake((a, b) => 10);
  const log = sinon.spy(console, 'log');
  sendPaymentRequestToApi(22, 88);

  it('check wether calculateNumber method was called', () => {
    expect(log.calledWithExactly('The total is: 10'));
  });
  it('check wether calculateNumber method was called once', () => {
    console.log(calMethod.calledOnce);
  });
});
