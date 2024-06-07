const { expect } = require('chai');
const request = require('request');

describe('api test', () => {
  it('GET / - returns the correct status code and data', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id - returns the correct status code  for valid id', (done) => {
    request('http://localhost:7865/cart/420', (err, res, body) => {
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 420');
      done();
    });
  });
  it('GET /cart/:id - returns the correct status code  for invalid id', (done) => {
    request('http://localhost:7865/cart/drak', (err, res, _) => {
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('POST /login - returns Welcome :userName', (done) => {
    const userData = { userName: 'mbugua' };
    request.post(
      'http://localhost:7865/login',
      { json: userData }, (err, res, body) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${userData.userName}`);
        done();
      });
  });
  it('GET /available_payments - returns the correct status code  for invalid id', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      const expectedBody = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal(JSON.stringify(expectedBody));
      done();
    });
  });
});
