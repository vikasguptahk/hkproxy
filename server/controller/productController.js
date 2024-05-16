const Productsite = require('../models/ProductSites.js');


const create = async(req,res)=>{
    try{
        const productsite = new Productsite(req.body)
        if(!productsite){
            return res.status(404).json({msg:"Product site not found"});
        }
        await productsite.save()
        res.status(200).json({msg:"Product site added successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const getallasin = async(req,res) =>{
    try{
        const uniqueAsins = await Productsite.distinct('trackid',{"platform":"amazon"});
        res.json(uniqueAsins);
    } catch(err){
        console.error(err);
        res.status(500).json({msg:'Server Error'});
    }
}

// const getallUsers = async(req,res) =>{
//     try{
//         const uniqueUsers = await Productsite.distinct('trackid',{"platform":"meesho"});
//         res.json(uniqueUsers);
//     }
//     catch(err){
//         console.error(err);
//         res.status(500).json({msg:'Server Error'});
//     }
// }

const getallUsers = async(req,res) =>{
    const {platform,trackid} = req.query;
    try{
        let users;
        if(platform === 'ANY'){
            console.log("all product are here");
            if(trackid && trackid !== 'ALL'){
                //const isTrackidString = await Productsite.findOne({}).where('trackid').regex(/^[0-9]+$/).exec() === null;
                users = await Productsite.find({trackid})
            }
            else{
                users = await Productsite.find();
            }   
        }
        else{
            if (trackid && trackid !== 'ALL') {
                users = await Productsite.find({platform,trackid})
                // console.log("trackid: " + trackid)
                // let trackidValue = isNaN(trackid) ? trackid : Number(trackid);
                // users = await Productsite.find({ platform, trackid: trackidValue });
                // if (users !== null) {
                //     console.log("user is not null")
                    
                //         users = await Productsite.find({ platform, trackid: trackidValue })
                    
                // } else {
                //     console.log("no result");
                // }
            }
            else if (platform) {
                users = await Productsite.find({ platform });
            }
            else {
                users = await Productsite.find();
            }
        //     if (trackid && trackid !== 'ALL') {
        //     console.log("trackid: " + trackid)
        //     let trackidValue = isNaN(trackid) ? trackid : Number(trackid);
        //     users = await Productsite.find({ platform, trackid: trackidValue });
        //     if (users !== null) {
        //         console.log("user is not null")
        //         if (platform === "amazon") {
        //             users = await Productsite.find({ platform, trackid: trackidValue })
        //         }
        //     } else {
        //         console.log("no result");
        //     }
        // }
        // else if (platform) {
        //     users = await Productsite.find({ platform });
        // }
        // else {
        //     users = await Productsite.find();
        // }
        }
        
        res.status(200).json(users);
        
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Server Error'});
    }
}

 
const getallTrackid = async(req,res) =>{
    const {platform} = req.query;
    try{
        if(platform === 'ANY'){
            const trackids = await Productsite.distinct('trackid',{trackid:{$ne:null}});
            res.status(200).json(trackids);
        }
        else{
            const trackids = await Productsite.distinct('trackid',{platform,trackid:{$ne:null}})
            res.status(200).json(trackids);
        }
        
    }catch(error){
        console.log(error);
        res.status(500).json({Message:'Internal server error'})
    }
}
const getAllProduct = async(req,res) =>{
    try{
        const productsite = await Productsite.find();
        if(!productsite){
            return res.status(404).json({msg:"no site is broduct"})
        }
        res.status(200).json(productsite)
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyProduct = await Productsite.findById(id);
        if(!alreadyProduct){
            return res.status(404).json({msg:"This site is not product"})
        }
        res.status(200).json(alreadyProduct);
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateProductsite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadexist = await Productsite.findById(id);
        if(!alreadexist){
            return res.status(401).json({msg:"Product site not found"});
        }
         
        const updatedData = await Productsite.findByIdAndUpdate(id, req.body, {new:true});
        console.log(updatedData)
        res.status(200).json({msg: "Product site  url updated successfully"});
        
    } catch(error){
        res.status(500).json({error:error})
    }
}

const deleteProductsite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyProduct = await Productsite.findById(id);
        if(!alreadyProduct){
            return res.status(404).json({msg:"already ubroduct"})
        }
        await Productsite.findByIdAndDelete(id);
        res.status(200).json({msg:"UnProduct site successfully"})
    }catch(eror){
        res.status(500).json({error: console.log(eror)});
    }
}

module.exports = { getallTrackid,getallUsers,create,getallasin, getAllProduct, getOne, updateProductsite, deleteProductsite};