const { DataTypes } = require('sequelize');
const Product = require('./Product');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
  });

  Category.belongsToMany(Product, { through: 'Product' });
  Product.belongsToMany(Category, { through: 'Product' });
};
