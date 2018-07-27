const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.model('cart');

module.exports = Cart;