const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports=(sequelize)=>{
    const Order= sequelize.define('order',{
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