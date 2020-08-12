const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type : DataTypes.STRING, //descripcion del producto
    },
    price: {
      type : DataTypes.DECIMAL, //(o INTEGER LUEGO ME AYUDAN A DECIDIR)
      field: "price",
      allowNull: false
    },
    stock : {
      type : DataTypes.INTEGER, //cantidad de productos en almacen
      field: "stock",
      allowNull: false
    },
    categories: {
      type : DataTypes.TEXT,  //(como es product le echare un ojo al diagrama ER en los catalogos)
      field: "categories",
      allowNull: false
    },
    image: {
      type : DataTypes.BLOB,  //imagen del producto (TAMAÑO POR DEFINIR)
      field: "image",
      allowNull: false
    },
    quantity: {    //cantidad para comprar (creemos util en el carrito)
      type: DataTypes.INTEGER,
      field: 'quantity',
      allowNull: false
    },
    content: { //Datos de la cantidad en mililitros (ml) o centimetros cubicos (cc)
      type: DataTypes.INTEGER,
      field: 'content',
      allowNull: false
    },
    percentage: {  //Grado de alcohol del vino
      type: DataTypes.INTEGER,
      field: 'percentage',
      allowNull: false
    },
    country: {  //Pais de origen 
      type: DataTypes.TEXT,
      field: 'country',
      allowNull: false
    },
    colour: { //(color especifico del vino)
      type: DataTypes.TEXT,
      field: 'colour',
      allowNull: false
    }
    
  });
};
