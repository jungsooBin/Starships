const Sequelize = require('sequelize');
const db = require('../db');

//should shipping info be included here or maybe on user, or in a shipping model?

const Payment = db.define('payment', {
  cardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  expiration: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Payment;

//include a method or hook to validate the credit card or date or both