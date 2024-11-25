const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const { sequelize } = require('./models');
//definicion de rutas
const productRouter = require('./routes/productRouter');

const port  = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Uso de rutas
app.use('/', productRouter);

app.listen(port, async()=>{
    console.log('Server is running on port', port);
    try{
        await sequelize.authenticate();
        console.log('database connected');
    }
    catch(error){
        console.log('database not connected', error);
    }
});