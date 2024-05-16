const express = require('express');
const { getaAllUsers, create, getUser, updateUser, deleteUser, getUserByUsername, updateUserByUsername, uploadImageByUsername } = require('../controller/usersController.js');

const route = express.Router();



route.post("/create",create);
route.get("/getall",getaAllUsers)
route.get("/getone/:id",getUser)
route.put("/update/:id",updateUser)
route.delete("/delete/:id",deleteUser)
route.get("/getuser/:username",getUserByUsername)
route.put("/update2/:username",updateUserByUsername)
route.put("/update3/:username",uploadImageByUsername)
module.exports = route;