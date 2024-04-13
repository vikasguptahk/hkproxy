const express = require('express')
const dotenv = require('dotenv')
const blockedRoutes = require("../server/routes/blockedSiteRoute");
const inspectRoutes = require("../server/routes/inspectSiteRoute");


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














// app.use("/api",route)
/*
app.get('/getUsers',(req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get('/getBlockedSite',(req,res) =>{
    BlockedSiteModel.find()
    .then(users => res.json())
    .catch(err => res.json())
})
app.post('/addBlockedSite',(req,res)=>{

})
app.delete('/deleteBlockedSite',(req,res) =>{

})

app.get('/getInspectedSite',(req,res) =>{
    BlockedSiteModel.find()
    .then(users => res.json())
    .catch(err => res.json())
})
app.post('/addInspectedSite',(req,res)=>{

})
app.delete('/deleteInspectedSite',(req,res) =>{
    
})


app.get('/getModifiedSite',(req,res) =>{
    BlockedSiteModel.find()
    .then(users => res.json())
    .catch(err => res.json())
})
app.post('/addModifiedSite',(req,res)=>{

})
app.delete('/deleteModifiedSite',(req,res) =>{
    
})


app.listen(3002,()=>{
    console.log("server is running in 3002")
})
*/