const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('returns the correct value', (done) => {
    expect(getPaymentTokenFromAPI(false)).undefined;
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).deep.equal({
          data: 'Successful response from the API'
        });
        done();
      });
  });
});
