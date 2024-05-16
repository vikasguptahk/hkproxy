const mongoose = require('mongoose')

const UsersImageSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required: true,
        unique:true,
    },
    profileImage:{
        type:String,
        required:false
    }

})
const UsersImage = mongoose.model("UsersImage",UsersImageSchema)
module.exports = UsersImage
