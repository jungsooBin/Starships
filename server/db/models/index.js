const User = require('./user');
const Ship = require('./ship');
const Review = require('./review');
// const Cart = require('./cart');
const Payment = require('./payment');
const Sequelize = require('sequelize');
const db = require('../db')


Ship.belongsTo(User);
Ship.hasMany(Review)

Review.belongsTo(Ship)
Review.belongsTo(User)

User.hasMany(Ship);
User.hasMany(Review);

User.belongsToMany(Ship, {as: 'Cart', through: 'cart'})
Ship.belongsToMany(User, {as: 'Users', through: 'cart'})



//should it be user.hasMany(Payment) ???
Payment.belongsTo(User);

module.exports = {
  User, Ship, Review, Payment
}
