 
const express = require('express');
const { create } = require('../models/ProductSites.js');
const { getallasin, getAllProduct, getOne, updateProductsite, deleteProductsite, getallUsers, getallTrackid } = require('../controller/productController');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAllProduct)
route.get("/getall/trackids",getallTrackid)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateProductsite)
route.delete("/delete/:id",deleteProductsite)
route.get("/getall/asin",getallasin)
//route.get("/getall/platform",getallPlatform)

route.get("/getall/users",getallUsers)
//  this is for amazon
module.exports = route;
 

