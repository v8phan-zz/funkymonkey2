const Sequelize = require("sequelize");
const db = require("./index.js");

console.log(db.sequelize);
const Comment = db.sequelize.define("comment", {
  comment: {
    type: Sequelize.STRING,
  },
  blog_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

Comment.associate = (models) => {
  Comment.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
};

module.exports = Comment;
