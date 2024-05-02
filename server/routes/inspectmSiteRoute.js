const { create, getAll,  getOne, updateInspectmsite, deleteInspectmedSite } = require("../controller/inspectmController.js");
const express = require('express');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAll)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateInspectmsite)
route.delete("/delete/:id",deleteInspectmedSite)

 
module.exports = route;