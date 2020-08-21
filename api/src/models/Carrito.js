const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports=(sequelize)=>{
    const Carrito= sequelize.define('carrito',{

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING
        },
        cantidad:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        price:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },

        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    })
}