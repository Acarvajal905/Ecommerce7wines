const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');


//Esta tabla es la que realaciona las ordenes con los productos.
module.exports=(sequelize)=>{
    const Order_Product = sequelize.define('order_product',{

        price:{//Guarda el precio unitario del producto.
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        cantidad:{
            type:DataTypes.DECIMAL,
            allowNull:false
        }
    })
}