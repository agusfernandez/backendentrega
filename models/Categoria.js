const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria',{
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_categoria:{
        type: DataTypes.STRING,
        allowNull: false
    },  
    descrip_categoria:{
        type: DataTypes.TEXT,
        allowNull: false
    }},
    {
        tableName: 'categorias',
        timestamps: false
    }
);

module.exports= Categoria;

