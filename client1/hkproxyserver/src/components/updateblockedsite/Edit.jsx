import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addBlockedSites/add.css"
// import "../addBlockedSites/";
import toast from 'react-hot-toast';

const Edit = () => {

 
 const blockedsites = {
    url:""
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [blockedsite, setBlockedsite] = useState(blockedsites);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    //setBlockedsite(prevState => ({...prevState,[name]:value}));
    setBlockedsite({...blockedsite, [name]:value});
    console.log(blockedsite);
 }

 useEffect(()=>{
    axios.get(`http://localhost:3005/api/getone/${id}`)
    .then((response)=>{
        setBlockedsite(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    try{
        const response= await axios.put(`http://localhost:3005/api/update/${id}`,blockedsite);
        toast.success(response.data.msg,{position:"top-right"});
        navigate("/");
    }catch(error){
        console.log(error);
        toast.error("failed to update blocked site url",{position:"top-center"});
    }
    /*
    await axios.put(`http://localhost:3005/api/update/${id}`, blockedsite)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
    */
 }

  return (
    <div className='addBlockedsite'>
        <Link to={"/blocked"}>Back</Link>
        <h3>Update Blockedsites</h3>
        <form className='addBlockedsiteForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" value={blockedsite.url} onChange={inputChangeHandler} id="url" name="url" autoComplete='off' placeholder='url address' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE Blocked site</button>
            </div>
        </form>
    </div>
  )
}

export default Edit