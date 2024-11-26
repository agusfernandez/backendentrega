//Traigo los Modelos
const { Producto, Categoria } = require('../models');

const productController = {
    //Listar todos los productos
    list: async (req, res) =>  {
        try{
            const productos = await Producto.findAll({include: Categoria}); // por el id de categoria
            res.render ('products/products', {productos});// le paso la vista de la lista productos
        }
        catch(error){
            console.log(error);
            res.status(500).send({message: 'Error 500: Error al obtener los productos'});
        }
    },

    // Crear Producto

    create: async(req,res) => {
        try{
            const categorias= await Categoria.findAll();
            res.render('products/create' , { categorias });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Error 500: Error al crear el formulario' });
        }
    },

    save: async (req, res) => {

        const {nombre_producto, marca_producto, descrip_producto, precio_producto,estado_producto, stock_producto , id_categoria} = req.body;
        const imagen_producto = req.file ? req.file.filename : null;
        console.log(imagen_producto);

        try {
            await Producto.create({nombre_producto, marca_producto, descrip_producto, precio_producto,estado_producto, stock_producto ,imagen_producto, id_categoria});
            res.redirect('/products/products');
        } catch(error){
            console.log('Subir producto' , error);
            res.status(500).send({message: 'Error 500: Error al guardar el producto' });
        }
    }


}

module.exports = productController; 