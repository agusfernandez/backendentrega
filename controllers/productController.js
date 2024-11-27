//Traigo los Modelos
const { Producto, Categoria } = require('../models');

const productController = {
    //Listar todos los productos
    list: async (req, res) =>  {
        try{
            const productos = await Producto.findAll({include: Categoria}); // por el id de categoria
            res.render ('products/products', { productos });// le paso la vista de la lista productos
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

        const { nombre_producto, marca_producto, descrip_producto, precio_producto,estado_producto, stock_producto , id_categoria } = req.body;
        const imagen_producto = req.file ? req.file.filename : null;
        console.log(imagen_producto);

        try {
            await Producto.create({nombre_producto, marca_producto, descrip_producto, precio_producto,estado_producto, stock_producto ,imagen_producto, id_categoria});
            res.redirect('/products/products');
        } catch(error){
            console.log('Subir producto' , error);
            res.status(500).send({message: 'Error 500: Error al guardar el producto' });
        }
    },

    // Editar Producto

    edit: async (req, res) => {
        console.log('Parámetros recibidos:', req.params); // Verifica el ID recibido
        const { id_producto } = req.params;
        try {
            const producto = await Producto.findByPk(id_producto);
            const categorias = await Categoria.findAll();
            console.log('Producto encontrado:', producto);
            res.render('products/edit', { producto, categorias });

        } catch(error){
            console.log(error);
            res.status(500).send({message: 'Error 500: Error al obtener el formulario de edicion'});
        }
    },
    
    update: async (req, res) => {
        const { id_producto } = req.params;
        const { nombre_producto, marca_producto, descrip_producto, precio_producto,estado_producto, stock_producto , id_categoria } = req.body;
        const imagen_producto = req.file ? req.file.filename : null;

        try {
            const producto = await Producto.findByPk(id_producto);
            producto.id_producto = id_producto;
            producto.nombre_producto = nombre_producto;
            producto.marca_producto = marca_producto;
            producto.descrip_producto = descrip_producto;
            producto.precio_producto = precio_producto;
            producto.estado_producto = estado_producto;
            producto.stock_producto = stock_producto;
            producto.id_categoria = id_categoria;
            if (imagen_producto) producto.imagen_producto = imagen_producto;
            producto.id_categoria = id_categoria;
            await producto.save();
            res.redirect('/products/products')
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Error 500: Error al actualizar el producto'});
        }
    },

        // Eliminar Producto

        delete: async (req, res) => {
            const { id_producto } = req.params;
            try {

                const producto = await Producto.findByPk(id_producto);
                if (!producto) {
                    return res.status(404).send({ message: 'Producto no encontrado' });
                }
                res.render('products/delete' , { producto });

            }  catch(error) {
                console.log(error);
                res.status(500).send({ message: 'Error al cargar la página de confirmación' });

            }

            
        },


        destroy: async (req, res) => {
            const { id_producto } = req.params;
            try{
                await Producto.destroy({ where: { id_producto } });
                res.redirect('/products/products');
                } catch{
                    res.status(500).send({ message: 'Error al eliminar la moto'});
            }
        }

}

module.exports = productController; 