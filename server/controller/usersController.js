const Users  = require('../models/Users.js');
const fs = require('fs')
const path = require('path')
const create = async(req,res)=>{
    try{
        const newdata = new Users(req.body)
        if(!newdata){
            return res.status(404).json({msg:"User Not Found"});
        }
        await newdata.save();
        res.status(200).json({msg:"new user added successfully"});
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

const uploadImageByUsername = async(req,res)=>{
    try{
        const username = req.params.username;
        const user = await Users.findOne({username:username});
        console.log("username was found to be: "+user);
        if(!user) {
            return res.status(404).json({msg:"User doesn't exist"});
        }
        const base64Image = req.body.profileImage;
        if(!base64Image){
            return res.status(404).json({msg:"No image data provided"})
        }
        const imagebuffer = Buffer.from(base64Image,'base64');
        const dirname = "/home/vikas.gupta1@Brightlifecare.local/Pictures/hkProxyServer/client1/hkproxyserver/src/Profilephotes"
        fs.writeFileSync(path.join(dirname,`${username}_image.jpg`),imagebuffer);
        user.profileImage = base64Image;
        await user.save();
        return res.status(200).json({msg:'Image Uploaded Successfully'});
    }catch(error){
        console.log("Error in uploading user profile image: ",error);
        return res.status(500).json({error: error.message})
    }
}

const getaAllUsers = async(req,res)=> {
    try{
        const users = await Users.find();
        if(!users){
            return res.status(404).json({msg: "no user found"});
        }
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

const updateUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const useralreadyexist = await Users.findById(id);
        if(!useralreadyexist){
            return res.status(401).json({msg:"user not found"})
        }
        const updateuser = await Users.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({error:error})
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

const updateUserByUsername = async(req,res)=>{
    try{
        const username = req.params.username;
        const user = await Users.findOne({username:username});
        if(!user){
            return res.status(401).json({msg:"user not found"});
        }
        const updateuser = await Users.findOneAndUpdate({username:username},req.body,{new:true});
        res.status(200).json({user:updateuser});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}

const getUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userexist = await Users.findById(id);
        if(!userexist){
            res.status(404).json({msg:"user not found"});
        }
        res.status(200).json(userexist);
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getUserByUsername = async(req,res)=>{
    try{
        const username = req.params.username;
        const userexist = await Users.findOne({username:username});
        if(!userexist){
            return res.status(404).json({msg:"User doesn't exist"});
        }
        return res.status(200).json(userexist);
    }catch(error){
        console.error("Error in fetching user data by username: ",error);
        return res.status(500).json({error:error.message});
    }
}

const deleteUser = async(req,res)=>{
    try{
        const id =  req.params.id;
        const userexist = await Users.findById(id);
        if(!userexist){
            res.status(404).json({msg:"User not found"});
        }
        await Users.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted Successfully"})
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

module.exports = {
    uploadImageByUsername,
    updateUserByUsername,
    create,
    getaAllUsers,
    updateUser,
    getUser,
    deleteUser,
    getUserByUsername}