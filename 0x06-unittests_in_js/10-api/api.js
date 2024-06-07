const express = require('express');

const app = express();
const port = 7865;

// middleware
app.use(express.json());

// routes
app.get('/', (_, res) => {
  res.status(200).send('Welcome to the payment system');
})

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  res.status(200).send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(403).send('Invalid user');
    return;
  }
  res.status(200).send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port ' + port);
});

module.exports = app;
