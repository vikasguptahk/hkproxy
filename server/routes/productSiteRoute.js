 
const express = require('express');
const { create } = require('../models/ProductSites.js');
const { getAllProduct, getOne, updateProductsite, deleteProductsite } = require('../controller/productController');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAllProduct)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateProductsite)
route.delete("/delete/:id",deleteProductsite)



module.exports = route;
 

