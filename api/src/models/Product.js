const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Producto = sequelize.define('product', {
    name: {
      type: DataTypes.STRING, //podemos usarlo para el url combinado con su id
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT, //descripcion del producto
      allowNull: false
    },
    category: {
      type: DataTypes.TEXT, //descripcion del producto
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL, //(o INTEGER LUEGO ME AYUDAN A DECIDIR)
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER, //cantidad de productos en almacen
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,  //imagen del producto (TAMAÑO POR DEFINIR)
      allowNull: false
    },
    content: { //Datos de la cantidad en mililitros (ml) o centimetros cubicos (cc)
      type: DataTypes.INTEGER,
      allowNull: false
    },
    percentage: {  //Grado de alcohol del vino
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    country: {  //Pais de origen 
      type: DataTypes.TEXT,
      allowNull: false
    },
    colour: { //(color especifico del vino)
      type: DataTypes.TEXT,
      allowNull: false
    },
    route: { //RUTA DEL PRODUCTO
      type: DataTypes.VIRTUAL,
      get() {                          //NO SE SI AGREGARLE TAMBIEN EL ID ASI "+ this.getDataValur("id")"
        return "/product" + this.getDataValue("name") + this.getDataValue("id");
      }
    }

  });

  Producto.addHook("beforeValidate", (product) => {
    product.url = product.name.replace(/\s+/g, "_").replace(/\W/g, "")
  })
  //cree un hook para la url para remplazar espacios y los valores como simbolos y caracterers raros

};


