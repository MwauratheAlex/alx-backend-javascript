const { expect } = require('chai');
const request = require('request');

describe('payment system api index page', () => {
  const url = 'http://localhost:7865';
  it('returns correct status code', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).equal(200); 
      expect(body).equal('Welcome to the payment system');
      done();
    })  
  });
});
