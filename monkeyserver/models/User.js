// const Sequelize = require("sequelize");
// const db = require('../config/database');

const sequelize = require('database.js').sequelize;
const DataTypes = require('mysql');

const User = sequelize.define('user'), {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  testcolumn: {
    type: DataTypes.INTEGER,
  },
}

// const User = db.define("user", {
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   testcolumn: {
//     type: Sequelize.INTEGER,
//   },
// });

User.associate = (models) => {
  User.hasMany(models.Comments, {
    foreignKey: 'comment_id',
  });
};

module.exports = User;
