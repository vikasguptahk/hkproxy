const { getallPlatform, create, getAll,  getOne, updateInspectsite, deleteInspectedSite } = require("../controller/inspectController.js");
const express = require('express');
const { getallUsers } = require("../controller/productController.js");
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAll)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateInspectsite)
route.delete("/delete/:id",deleteInspectedSite)
route.get("/getall/platform",getallPlatform)
route.get("/getall/users",getallUsers)
 
module.exports = route;