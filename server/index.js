const express = require('express')
const dotenv = require('dotenv')
const blockedRoutes = require("../server/routes/blockedSiteRoute");
const inspectRoutes = require("../server/routes/inspectSiteRoute");
const modifiedRoutes = require("../server/routes/modifiedSiteRoute");
const productRoutes = require("../server/routes/productSiteRoute");
const mongoose = require('mongoose')
const cors = require('cors') 
dotenv.config();


const app = express()
app.use(cors())
app.use(express.json());



let PORT =process.env.PORT || 7000;
let MONGOURL = process.env.MONGOURL;


 mongoose.connect(MONGOURL).then(() =>{
    console.log("db connected successfully");
        app.listen(PORT,()=>{
            console.log(`Server is running on port:${PORT}`);
        })
}).catch(error => console.log(error));


app.use("/api/inspect",inspectRoutes);
app.use("/api", blockedRoutes);
app.use("/api/modified",modifiedRoutes);
app.use("/api/product",productRoutes);