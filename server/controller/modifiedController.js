const Modifiedsite = require('../models/ModifiedSites.js');


const create = async(req,res)=>{
    try{
        console.log("Requst body",req.body)
        const modifiedsite = new Modifiedsite(req.body)
        console.log("dsdlk",modifiedsite);
        if(!modifiedsite){
            return res.status(404).json({msg:"Modifieded site not found"});
        }
        await modifiedsite.save()
        res.status(200).json({msg:"Modifieded site added successfully"})
    }
    catch(error){
        console.log("error:",error);
        res.status(500).json({error:error})
        
    }
}

const getAll= async(req,res) =>{
    try{
        const modifiedsite = await Modifiedsite.find();
        if(!modifiedsite){
            return res.status(404).json({msg:"no site is Modifieded"})
        }
        res.status(200).json(modifiedsite)
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Modifiedsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"This site is not added fpr modifiedion"})
        }
        res.status(200).json(alreadyBlocked);
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateModifiedsite= async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadexist = await Modifiedsite.findById(id);
        if(!alreadexist){
            return res.status(401).json({msg:"Modifieded site not found"});
        }
         
        const updatedData = await Modifiedsite.findByIdAndUpdate(id, req.body, {new:true});
        console.log(updatedData)
        res.status(200).json({msg: "Modifieded site  url updated successfully"});
        
    } catch(error){
        res.status(500).json({error:error})
    }
}

const deleteModifiededSite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Modifiedsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"this site is not present"})
        }
        await Modifiedsite.findByIdAndDelete(id);
        res.status(200).json({msg:" site deleted from modifiedion category successfully"})
    }catch(eror){
        res.status(500).json({error: console.log(eror)});
    }
}

module.exports = { create, getAll, getOne, updateModifiedsite, deleteModifiededSite};