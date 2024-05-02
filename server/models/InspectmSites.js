
const mongoose = require('mongoose')

const InspectmSiteSchema= new mongoose.Schema({
    url:{
        type: String,
        required: true
     }
})


const Inspectmsite = mongoose.model("InspectmSite",InspectmSiteSchema)
module.exports = Inspectmsite