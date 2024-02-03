const { expect } = require('chai');
const request = require('request');

describe('Payment system api', () => {
  const url = 'http://localhost:7865';
  it('GET / returns correct value and code', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).equal(200);
      expect(body).equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id returns correct value and code', (done) => {
    const id = 777;
    request.get(`${url}/cart/${id}`, (err, res, body) => {
       expect(res.statusCode).equal(200);
       expect(res.body).eq(`Payment methods for cart ${id}`);
    });
    done();
  });
});
