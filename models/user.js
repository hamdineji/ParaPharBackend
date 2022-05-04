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
    const User = sequelize.define("User", {
        firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      age : {
        type : Sequelize.INTEGER
      },
      titre : {
        type : Sequelize.STRING
      },
      adresse : {
        type : Sequelize.STRING
      },
      city : {
        type : Sequelize.STRING
      } ,
      country : {
        type : Sequelize.STRING
      },
      codePostal : {
        type : Sequelize.INTEGER
      },
      email : {
        type : Sequelize.STRING
      } ,
      password : {
        type : Sequelize.STRING
      }
    });
    return User;
  };