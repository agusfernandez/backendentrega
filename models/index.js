const sequelize = require('../config/database');
const Producto = require('./Producto');
const Categoria = require('./Categoria');

//paso Asociaciones
Categoria.hasMany(Producto, { foreignKey: 'id_categoria' });
Producto.belongsTo(Categoria, { foreignKey: 'id_categoria' });


module.exports = {
    sequelize,
    Categoria,
    Producto
}