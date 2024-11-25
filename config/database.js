const { Sequelize } = require('sequelize');

//datos de mi base de datos
//  new Sequelize('basedatos','usuario','password') 
const sequelize = new Sequelize('electrodomesticos2','root','root',{
    host: '127.0.0.1',
    port: 8889,
    dialect: 'mysql',
    logging: false
});


module.exports = sequelize;