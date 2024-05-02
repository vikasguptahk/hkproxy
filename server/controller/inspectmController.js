const Inspectmsite = require('../models/InspectmSites.js');


const create = async(req,res)=>{
    try{
        const inspectmsite = new Inspectmsite(req.body)
        if(!inspectmsite){
            return res.status(404).json({msg:"Inspectmed site not found"});
        }
        await inspectmsite.save()
        res.status(200).json({msg:"Inspectmed site added successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const getAll= async(req,res) =>{
    try{
        const inspectmsite = await Inspectmsite.find();
        if(!inspectmsite){
            return res.status(404).json({msg:"no site is Inspectmed"})
        }
        res.status(200).json(inspectmsite)
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Inspectmsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"This site is not added fpr inspectmion"})
        }
        res.status(200).json(alreadyBlocked);
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateInspectmsite= async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadexist = await Inspectmsite.findById(id);
        if(!alreadexist){
            return res.status(401).json({msg:"Inspectmed site not found"});
        }
         
        const updatedData = await Inspectmsite.findByIdAndUpdate(id, req.body, {new:true});
        console.log(updatedData)
        res.status(200).json({msg: "Inspectmed site  url updated successfully"});
        
    } catch(error){
        res.status(500).json({error:error})
    }
}

const deleteInspectmedSite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyBlocked = await Inspectmsite.findById(id);
        if(!alreadyBlocked){
            return res.status(404).json({msg:"this site is not present"})
        }
        await Inspectmsite.findByIdAndDelete(id);
        res.status(200).json({msg:" site deleted from inspectmion category successfully"})
    }catch(eror){
        res.status(500).json({error: console.log(eror)});
    }
}

module.exports = { create, getAll, getOne, updateInspectmsite, deleteInspectmedSite};