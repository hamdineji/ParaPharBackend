// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// });
// module.exports=User;

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("Product", {
        name: {
        type: Sequelize.STRING
      },
      price : {
        type : Sequelize.INTEGER
      },
      description : {
        type : Sequelize.STRING
      },
      picture : {
        type : Sequelize.STRING
      },
      availability : {
        type : Sequelize.BOOLEAN
      }
    });
    return Product;
  };