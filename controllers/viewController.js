const ProductModel = require('../models/productModel');

const renderHomePage = (req, res) => {
    const products = ProductModel.getAllProducts();
    res.render('index', {
        title: 'KameraKu - Rental Kamera Online',
        products: products
    });
};

module.exports = { 
    renderHomePage
};