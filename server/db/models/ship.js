const Sequelize = require('sequelize');
const db = require('../db');

const Ship = db.define('starships', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://i.stack.imgur.com/rsH6n.png'
  }

});

module.exports = Ship;
