const UsersImage  = require('../models/UsersImage.js');

// const create = async(req,res)=>{
//     try{
//         const newdata = new UsersImage(req.body)
//         if(!newdata){
//             return res.status(404).json({msg:"User Not Found"});
//         }
//         await newdata.save();
//         res.status(200).json({msg:"new user added successfully"});
//     }
//     catch(error){
//         res.status(500).json({error:error});
//     }
// }

const getAllUsersImage = async(req,res)=> {
    try{
        const usersImage = await UsersImage.find();
        if(!usersImage){
            return res.status(404).json({msg: "no user found"});
        }
        res.status(200).json(usersImage);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

const updateUserImageById = async(req,res)=>{
    try{
        const id = req.params.id;
        const useralreadyexist = await UsersImage.findById(id);
        if(!useralreadyexist){
            return res.status(401).json({msg:"user not found"})
        }
        const updateuser = await UsersImage.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({error:error})
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

const updateUserImageByUsername = async(req,res)=>{
    try{
        const username = req.params.username;
        const user = await UsersImage.findOne({username:username});
        if(!user){
            return res.status(401).json({msg:"user not found"});
        }
        const updateuser = await UsersImage.findOneAndUpdate({username:username},req.body,{new:true});
        res.status(200).json({user:updateuser});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}

const getUserImageById = async(req,res)=>{
    try{
        const id = req.params.id;
        const userexist = await UsersImage.findById(id);
        if(!userexist){
            res.status(404).json({msg:"user not found"});
        }
        res.status(200).json(userexist);
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getUserImageByUsername = async(req,res)=>{
    try{
        const username = req.params.username;
        const userexist = await UsersImage.findOne({username:username});
        if(!userexist){
            return res.status(404).json({msg:"User doesn't exist"});
        }
        return res.status(200).json(userexist);
    }catch(error){
        console.error("Error in fetching user data by username: ",error);
        return res.status(500).json({error:error.message});
    }
}

// const deleteUserImageById = async(req,res)=>{
//     try{
//         const id =  req.params.id;
//         const userexist = await UsersImage.findById(id);
//         if(!userexist){
//             res.status(404).json({msg:"User not found"});
//         }
//         await UsersImage.findByIdAndDelete(id);
//         res.status(200).json({msg:"User deleted Successfully"})
//     }
//     catch(error){
//         res.status(500).json({error:error});
//     }
// }
 

module.exports = {
    updateUserImageById,
    updateUserImageByUsername,
    getAllUsersImage,
    getUserImageById, 
    getUserImageByUsername
}