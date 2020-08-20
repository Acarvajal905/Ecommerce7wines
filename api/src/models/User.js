const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    name: {  
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,//El email debe ser unico.
      validate: {
        isEmail: true // chequea que el formato sea --> (foo@bar.com)
    },
    adress: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },//A definir si se usa o no.
    /* route: { //ruta de Usuario
      type: DataTypes.VIRTUAL, 
      get() { 
        return "/user" + this.getDataValue("name") + this.getDataValue("id") ;
      }
    } */
  }
  })
};