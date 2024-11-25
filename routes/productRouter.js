const express = require('express');
const multer = require('multer');
const productController = require('../controllers/productController');
const router= express.Router();


const storage= multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/images');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Routes

router.get('/' , (req,res) => {res.render('home/home'); })

//Lista de Productos
router.get('/products/products', productController.list);

//Crear Producto
router.get('/products/create', productController.create);
router.post('/products/create', upload.single('imagen_producto'), productController.save);

module.exports = router;  