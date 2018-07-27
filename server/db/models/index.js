const User = require('./user');
const Ship = require('./ship');
const Review = require('./review');
const Cart = require('./cart');
const Payment = require('./payment');


Ship.belongsToMany(User, {through: Cart}, {as: 'userCart'});
Ship.hasMany(Review)

Review.belongsTo(Ship)
Review.belongsTo(User)


User.belongsToMany(Ship, {through: Cart}, {as: 'userCart'})
// User.hasMany(Ship, {through: Cart});
User.hasMany(Review);
User.hasOne(Cart);

Cart.belongsTo(User);

//should it be user.hasMany(Payment) ???
Payment.belongsTo(User);

module.exports = {
  User, Ship, Review, Cart, Payment
}
