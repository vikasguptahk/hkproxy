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
        const uniqueAsins = await Productsite.distinct('asin');
        res.json(uniqueAsins);
    } catch(err){
        console.error(err);
        res.status(500).json({msg:'Server Error'});
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

module.exports = { create,getallasin, getAllProduct, getOne, updateProductsite, deleteProductsite};