const Inspectsite = require('../models/InspectSites.js');


const create = async(req,res)=>{
    try{
        const inspectsite = new Inspectsite(req.body)
        if(!inspectsite){
            return res.status(404).json({msg:"Inspected site not found"});
        }
        await inspectsite.save()
        res.status(200).json({msg:"Inspected site added successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const getAll= async(req,res) =>{
    try{
        const inspectsite = await Inspectsite.find();
        if(!inspectsite){
            return res.status(404).json({msg:"no site is Inspected"})
        }
        res.status(200).json(inspectsite)
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Inspectsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"This site is not added fpr inspection"})
        }
        res.status(200).json(alreadyBlocked);
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateInspectsite= async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadexist = await Inspectsite.findById(id);
        if(!alreadexist){
            return res.status(401).json({msg:"Inspected site not found"});
        }
         
        const updatedData = await Inspectsite.findByIdAndUpdate(id, req.body, {new:true});
        console.log(updatedData)
        res.status(200).json({msg: "Inspected site  url updated successfully"});
        
    } catch(error){
        res.status(500).json({error:error})
    }
}

const deleteInspectedSite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Inspectsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"this site is not present"})
        }
        await Inspectsite.findByIdAndDelete(id);
        res.status(200).json({msg:" site deleted from inspection category successfully"})
    }catch(eror){
        res.status(500).json({error: console.log(eror)});
    }
}

module.exports = { create, getAll, getOne, updateInspectsite, deleteInspectedSite};