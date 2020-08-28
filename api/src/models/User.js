const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,//El email debe ser unico.
      validate: {
        isEmail: true
      } // chequea que el formato sea --> (foo@bar.com)
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
};