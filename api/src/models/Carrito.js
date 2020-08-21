const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports=(sequelize)=>{
    const Carrito= sequelize.define('Carrito',{
        cantidad:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        prince:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        
    })
}