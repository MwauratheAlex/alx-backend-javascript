const { expect } = require('chai');
const request = require('request');

describe('api test', () => {
  it('returns the correct status code', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
