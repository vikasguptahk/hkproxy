import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addInspectSites/addInspect.css"
// import "../addBlockedSites/";
import toast from 'react-hot-toast';

const Edit = () => {

 
 const inspectsites = {
    url:""
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [inspectsite, setInspectsite] = useState(inspectsites);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    //setBlockedsite(prevState => ({...prevState,[name]:value}));
    setInspectsite({...inspectsite, [name]:value});
    console.log(blockedsite);
 }

 useEffect(()=>{
    axios.get(`http://localhost:3005/api/inspect/getone/${id}`)
    .then((response)=>{
        setInspectsite(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    try{
        const response= await axios.put(`http://localhost:3005/api/inspect/update/${id}`,blockedsite);
        toast.success(response.data.msg,{position:"top-right"});
        navigate("/");
    }catch(error){
        console.log(error);
        toast.error("failed to update inspect site url",{position:"top-center"});
    }
 }

  return (
    <div className='addBlockedsite'>
        <Link to={"/inspect"}>Back</Link>
        <h3>Update Blockedsites</h3>
        <form className='addBlockedsiteForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" value={inspectsite.url} onChange={inputChangeHandler} id="url" name="url" autoComplete='off' placeholder='url address' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE Inspect site</button>
            </div>
        </form>
    </div>
  )
}

export default Edit