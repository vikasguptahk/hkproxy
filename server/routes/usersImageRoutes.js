const express = require('express');
const { getAllUsersImage, getUserImageById, getUserImageByUsername, updateUserImageById, updateUserImageByUsername } = require('../controller/usersImageController');
const route = express.Router();
 

route.get("/getall",getAllUsersImage);
route.get("/getone/:id",getUserImageById)
route.get("/getone/:username",getUserImageByUsername)
route.put("/update/:id",updateUserImageById)
route.put("/update/:username",updateUserImageByUsername)
module.exports = route;
 