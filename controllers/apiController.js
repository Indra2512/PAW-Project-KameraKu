const ProductModel = require('../models/productModel');
const { successResponse } = require('../utils/responseHandler');

const getStatus = (req, res) => {
  const statusData = {
    status: 'Online',
    message: 'Server backend KameraKu berjalan dengan baik',
    timestamp: new Date().toISOString()
  };
  return successResponse(res, 200, 'Status aplikasi berhasil diambil', statusData);
};

const getProducts = (req, res) => {
  const products = ProductModel.getAllProducts();
  return successResponse(res, 200, 'Data produk sewa berhasil diambil', products);
};

module.exports = {
  getStatus,
  getProducts
};