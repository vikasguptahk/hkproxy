
const mongoose = require('mongoose')

const ModifiedSiteSchema= new mongoose.Schema({
    url:String,
    timestamp_req: {
        type: Date,
        default: Date.now
    }
})

const ModifiedSiteModel = mongoose.model("Users",ModifiedSiteSchema)
module.exports = ModifiedSiteModel