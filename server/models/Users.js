const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    profileImage:{
        type:String,
        required:false
    }

})
const Users = mongoose.model("Users",UsersSchema)
module.exports = Users
