const mongoose = require('mongoose')

const ProductSiteSchema= new mongoose.Schema({
    plateform:{
        type:String,
        required:true
    },
    asin:{
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
    response_time: {
        type: Number, // Assuming the timestamp is in milliseconds
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    statuscode: {
        type: Number,
        required: true
    },
    jsonData: {
        type:[{key:String,value:String}],
        required:true
    },
    
})

const Productsite = mongoose.model("ProductSites",ProductSiteSchema)
module.exports = Productsite
