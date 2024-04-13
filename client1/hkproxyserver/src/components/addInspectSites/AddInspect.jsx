import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./addInspect.css";
import toast from 'react-hot-toast';

const AddInspect = () => {
  const inspectsites= {
    url:"",
  }
  const [inspectsite,setInspectsite] = useState(inspectsites)
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setInspectsite({...inspectsite, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:3005/api/inspect/create", inspectsite)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/inspect")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addInspectsite'>
        <Link to={"/inspect"}>Back</Link>
        <h3>Add sites to inspect</h3>
        <form className='addInspectsiteForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
            </div>
             
            <div className="inputGroup">
                <button type="submit">ADD Inspect site URl</button>
            </div>
        </form>
    </div>
  )
}

export default AddInspect