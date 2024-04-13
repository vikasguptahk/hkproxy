import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./addmodified.css";
import toast from 'react-hot-toast';

const AddModified = () => {
  const modifiedsites= {
    url:"",
    jsonData:"",
  }

  const [modifiedsite,setModifiedsite] = useState(modifiedsites)
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setModifiedsite({...modifiedsite, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:3005/api/modified/create", modifiedsite)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addModifiedsite'>
        <Link to={"/modified/add"}>Back</Link>
        <h3>Add new Modified sites</h3>
        <form className='addModifiedsiteForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
            </div>
             
            <div className="inputGroup">
                <button type="submit">ADD Modified  site URl with data</button>
            </div>
        </form>
    </div>
  )
}

export default AddModified