const { expect } = require('chai');
const request = require('request');

describe('Payment system api', () => {
  const url = 'http://localhost:7865';
  it('GET / returns "Welcome to the payment system"', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id returns "Payment methods for cart :id"', (done) => {
    request.get(`${url}/cart/777`, (err, res, body) => {
       expect(res.statusCode).equal(200);
       expect(res.body).to.be.equal('Payment methods for cart 777');
    });
    done();
  });
  it('GET /cart/:id returns 404 error when id is negative', (done) => {
    request.get(`${url}/cart/-777`, (err, res, body) => {
       expect(res.statusCode).to.be.equal(404);
    });
    done();
  });
  it('GET /cart/:id returns returns 404 error when id is not number', (done) => {
    request.get(`${url}/cart/mbugua`, (err, res, body) => {
       expect(res.statusCode).to.be.equal(404);
    });
    done();
  });
});
