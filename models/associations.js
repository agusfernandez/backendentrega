const Categoria = require('./Categoria');
const Producto = require('./Produto');

// Se definen las Asociaciones

// 1 Categoria Puede Pertenecer a Muchas Productos
// En codigo se pone cruzado la relacion
Categoria.hasMany(Producto, { foreignKey: 'id_categoria' });
Producto.belongsTo(Categoria, { foreignKey: 'id_categoria'});

module.exports= { Categoria, Producto }; // exportamos los modelos