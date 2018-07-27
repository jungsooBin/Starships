const Sequelize = require('sequelize');
const db = require('../db');

<<<<<<< HEAD
const Cart = db.model('cart');
=======
const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER
  }
});
>>>>>>> c0b381cd2d3cfd91f27c8bbe69a1b6efeb1413b2

module.exports = Cart;