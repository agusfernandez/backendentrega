const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// Traigo Categoria en Producto por su vinculacion con la foreign-key   
const Categoria = require('./Categoria');


const Producto = sequelize.define('Producto',{
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_producto:{
        type: DataTypes.STRING,
        allowNull: false
    },
    marca_producto:{
        type: DataTypes.STRING
    },
    descrip_producto:{
        type: DataTypes.TEXT
    },
    precio_producto:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    estado_producto:{
        type: DataTypes.STRING
    },
    stock_producto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen_producto:{
        type: DataTypes.STRING,
        allowNull: true 
    },
    id_categoria:{
        type: DataTypes.INTEGER,
        references:{
            model:'categorias',
            key: 'id_categoria'
        }
    }},
    {
        tableName: 'productos',
        timestamps: false
    }
);

Producto.belongsTo(Categoria, {foreignKey: 'id_categoria' });

module.exports= Producto;

