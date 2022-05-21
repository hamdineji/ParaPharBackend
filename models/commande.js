const { Product, User } = require(".");


module.exports = (sequelize, Sequelize ) => {
    const Commande = sequelize.define("Commande", {
      adresse : {
        type : Sequelize.STRING
      }
    });

    return Commande;
  };