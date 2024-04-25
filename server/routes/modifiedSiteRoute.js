const { create, getAll,getOne,updateModifiedsite,deleteModifiededSite} = require("../controller/modifiedController.js");
const express = require('express');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAll)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateModifiedsite)
route.delete("/delete/:id",deleteModifiededSite)



module.exports = route;
 

