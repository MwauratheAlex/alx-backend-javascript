const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmout, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmout, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
