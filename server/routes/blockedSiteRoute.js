const { create, getAllBlocked, deleteBlockedsite, getOne, updateBlockedsite } = require("../controller/blockedController.js");
const express = require('express');
const route = express.Router();

route.post("/create",create)
route.get("/getall",getAllBlocked)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateBlockedsite)
route.delete("/delete/:id",deleteBlockedsite)

 
module.exports = route;