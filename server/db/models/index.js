const User = require('./user')
const Ship = require('./ship');

Ship.belongsTo(User);
User.hasMany(Ship);

module.exports = {
  User, Ship
}
