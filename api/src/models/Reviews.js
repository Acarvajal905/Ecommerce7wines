const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports=(sequelize)=>{
    const Reviews= sequelize.define('reviews',{
        calificacion:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        descripcion:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        
    })
}