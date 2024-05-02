const mongoose = require('mongoose')

const ProductmSiteSchema= new mongoose.Schema({
    plateform:{
        type:String,
        required:true
    },
    user_id:{
        type: String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    request_time: {
        type: Number, // Assuming the timestamp is in milliseconds
        required: true
    },
    
    statuscode: {
        type: Number,
        required: true
    },
    
})

const Productmsite = mongoose.model("ProductmSites",ProductmSiteSchema)
module.exports = Productmsite
