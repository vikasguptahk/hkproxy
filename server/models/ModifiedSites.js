
const mongoose = require('mongoose')

const ModifiedSiteSchema= new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    jsonData: {
        type:[{key:String,value:String}],
        required:true
    },
    
})


const Modifiedsite = mongoose.model("ModifiedSites",ModifiedSiteSchema)
module.exports = Modifiedsite

 