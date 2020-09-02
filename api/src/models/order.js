const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports=(sequelize)=>{
    const Order= sequelize.define('order',{
        productos: {//el nombre de los productos que esten en la orden
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('creada', 'procesando', 'cancelada', 'completa'),
            defaultValue: 'procesando',
        }
    });
}