
const mongoose = require('mongoose')

const InspectSiteSchema= new mongoose.Schema({
    url:{
        type: String,
        required: true
     },
     trackid:{
          type:String,
          required:true
     }
}) 


const Inspectsite = mongoose.model("InspectSite",InspectSiteSchema)
module.exports = Inspectsite