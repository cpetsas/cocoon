const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Articles = require('./articles')(sequelize)
db.Categories = require('./categories')(sequelize)
db.Authors = require('./authors')(sequelize)

db.Articles.belongsTo(db.Categories)
db.Articles.belongsTo(db.Authors)

module.exports = db