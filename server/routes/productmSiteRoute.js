 
const express = require('express');
const { create } = require('../models/ProductmSites.js');
const { getallUsers, getAllProductm, getOne, updateProductmsite, deleteProductmsite, getallUrls } = require('../controller/productmController');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAllProductm)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateProductmsite)
route.delete("/delete/:id",deleteProductmsite)
route.get("/getall/users",getallUsers)
route.get("/getall/urls",getallUrls)

module.exports = route;
 
//this is for meesho
