const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('returns the correct value', () => {
    expect(getPaymentTokenFromAPI(false)).undefined;
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.be({
            data: 'Successful response from the API'
        })
        done();
      });
  });
});
