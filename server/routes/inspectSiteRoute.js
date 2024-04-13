const { create, getAll,  getOne, updateInspectsite, deleteInspectedSite } = require("../controller/inspectController.js");
const express = require('express');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAll)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateInspectsite)
route.delete("/delete/:id",deleteInspectedSite)

 
module.exports = route;