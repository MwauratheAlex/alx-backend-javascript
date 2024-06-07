const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe('payment_token', () => {
  it('returns correct data when true is passed', (done) => {
    getPaymentTokenFromAPI(true)
      .then(data => {
        expect(data).to.deep.equal({
          data: 'Successful response from the API'
        });
      }).finally(done());
  });
  it('returns undefined when false is passed', () => {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});
