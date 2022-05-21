const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Commande = require("./commande.js")(sequelize , Sequelize );
db.Product = require("./product.js")(sequelize, Sequelize );
db.User =  require("./user.js")(sequelize, Sequelize , db.Commande);
// db.CommandeProduct = require("./commandeProduct")(sequelize, Sequelize , db.Commande , db.Product);
db.Commande.belongsToMany(db.Product, { through: 'CommandeProduct' });
db.Product.belongsToMany(db.Commande, { through: 'CommandeProduct' });
module.exports = db;