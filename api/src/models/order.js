const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports=(sequelize)=>{
    const Order= sequelize.define('order',{
        status: {
            type: DataTypes.ENUM('creada', 'procesando', 'cancelada', 'completa'),
            defaultValue: 'creada',
        }
    });
}