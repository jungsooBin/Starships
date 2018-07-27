const User = require('./user');
const Ship = require('./ship');
const Review = require('./review');
const Cart = require('./cart');
const Payment = require('./payment');


Ship.belongsTo(User);
Ship.hasMany(Review)

Review.belongsTo(Ship)
Review.belongsTo(User)

User.hasMany(Ship);
User.hasMany(Review);

//should it be user.hasMany(Payment) ???
Payment.belongsTo(User);

module.exports = {
  User, Ship, Review, Cart, Payment
}
