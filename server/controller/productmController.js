const Productmsite = require('../models/ProductmSites.js');


const create = async(req,res)=>{
    try{
        const productmsite = new Productmsite(req.body)
        if(!productmsite){
            return res.status(404).json({msg:"Productm site not found"});
        }
        await productmsite.save()
        res.status(200).json({msg:"Productm site added successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}
 
const getallUsers = async(req,res) =>{
    try{
        const uniqueUsers = await Productmsite.distinct('user_id');
        res.json(uniqueUsers);
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Server Error'});
    }
}

const getallUrls = async(req,res) =>{
    try{
        const uniqueurl = await Productmsite.distinct('url');
        const filteredUrls = uniqueurl.filter(url => !url.includes('analytics.google.com/') );
        const filteredUrls1 = filteredUrls.filter(url => !url.endsWith('.js'));
        res.json(filteredUrls1);
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:'server error'})
    }
}

const getAllProductm = async(req,res) =>{
    try{
        const productmsite = await Productmsite.find();
        if(!productmsite){
            return res.status(404).json({msg:"no site is broductm"})
        }
        res.status(200).json(productmsite)
    }catch(error){
        res.status(500).json({error:error});
    }
}

const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyProductm = await Productmsite.findById(id);
        if(!alreadyProductm){
            return res.status(404).json({msg:"This site is not productm"})
        }
        res.status(200).json(alreadyProductm);
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateProductmsite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadexist = await Productmsite.findById(id);
        if(!alreadexist){
            return res.status(401).json({msg:"Productm site not found"});
        }
         
        const updatedData = await Productmsite.findByIdAndUpdate(id, req.body, {new:true});
        console.log(updatedData)
        res.status(200).json({msg: "Productm site  url updated successfully"});
        
    } catch(error){
        res.status(500).json({error:error})
    }
}

const deleteProductmsite = async(req,res) =>{
    try{
        const id = req.params.id;
        const alreadyProductm = await Productmsite.findById(id);
        if(!alreadyProductm){
            return res.status(404).json({msg:"already ubroductm"})
        }
        await Productmsite.findByIdAndDelete(id);
        res.status(200).json({msg:"UnProductm site successfully"})
    }catch(eror){
        res.status(500).json({error: console.log(eror)});
    }
}

module.exports = { getallUsers,getallUrls,create, getAllProductm, getOne, updateProductmsite, deleteProductmsite};