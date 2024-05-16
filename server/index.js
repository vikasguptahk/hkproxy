const express = require('express')
const dotenv = require('dotenv')
const inspectmRoutes = require("../server/routes/inspectmSiteRoute");
const blockedRoutes = require("../server/routes/blockedSiteRoute");
const inspectRoutes = require("../server/routes/inspectSiteRoute");
const modifiedRoutes = require("../server/routes/modifiedSiteRoute");
const productRoutes = require("../server/routes/productSiteRoute");
const productmRoutes = require("../server/routes/productmSiteRoute");
const usersImage = require("../server/routes/usersImageRoutes");
const usersdata = require("../server/routes/usersRoutes");
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

app.use((req, res, next) => {
    console.log('Request size:', req.headers['content-length']);
    next();
  });
  
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/inspectm",inspectmRoutes);
app.use("/api/inspect",inspectRoutes);
app.use("/api", blockedRoutes);
app.use("/api/modified",modifiedRoutes);
app.use("/api/product",productRoutes);
app.use("/api/productm",productmRoutes);
app.use("/api/users",usersdata);
app.use("/api/userimage",usersImage)

// app.put("/api/users/update3/:username",(req,res)=>{
//     const {username} = req.params;
//     const base64Image = req.body.profileImage;
//     console.log('Request size:', req.headers['content-length']);
//     console.log('Request Headers:', req.headers);
// })