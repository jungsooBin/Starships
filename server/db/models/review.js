const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('reviews', {
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min:0,
      max:5
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Review;
