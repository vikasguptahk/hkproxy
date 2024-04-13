const Blockedsite = require('../models/BlockedSites.js');


const create = async(req,res)=>{
    try{
        const blockedsite = new Blockedsite(req.body)
        if(!blockedsite){
            return res.status(404).json({msg:"Blocked site not found"});
        }
        await blockedsite.save()
        res.status(200).json({msg:"Blocked site added successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const getAllBlocked = async(req,res) =>{
    try{
        const blockedsite = await Blockedsite.find();
        if(!blockedsite){
            return res.status(404).json({msg:"no site is blocked"})
        }
        res.status(200).json(blockedsite)
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Blockedsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"This site is not blocked"})
        }
        res.status(200).json(alreadyBlocked);
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateBlockedsite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadexist = await Blockedsite.findById(id);
        if(!alreadexist){
            return res.status(401).json({msg:"Blocked site not found"});
        }
         
        const updatedData = await Blockedsite.findByIdAndUpdate(id, req.body, {new:true});
        console.log(updatedData)
        res.status(200).json({msg: "Blocked site  url updated successfully"});
        
    } catch(error){
        res.status(500).json({error:error})
    }
}

const deleteBlockedsite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Blockedsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"already ublocked"})
        }
        await Blockedsite.findByIdAndDelete(id);
        res.status(200).json({msg:"UnBlocked site successfully"})
    }catch(eror){
        res.status(500).json({error: console.log(eror)});
    }
}

module.exports = { create, getAllBlocked, getOne, updateBlockedsite, deleteBlockedsite};