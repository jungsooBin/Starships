const User = require('./user');
const Ship = require('./ship');
const Cart = require('/cart');

Ship.belongsTo(User);
User.hasMany(Ship);

module.exports = {
  User, Ship, Cart
}
