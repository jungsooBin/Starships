const User = require('./user');
const Ship = require('./ship');
const Review = require('./review');
const Cart = require('./cart');


Ship.belongsTo(User);
Ship.hasMany(Review)

Review.belongsTo(Ship)
Review.belongsTo(User)

User.hasMany(Ship);
User.hasMany(Review);

module.exports = {
  User, Ship, Review, Cart
}
