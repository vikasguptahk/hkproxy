const mongoose = require('mongoose')
 
const BlockedSiteSchema= new mongoose.Schema({
     url:{
        type: String,
        required: true
     }
})

const Blockedsite = mongoose.model("BlockedSites",BlockedSiteSchema)
module.exports = Blockedsite

 