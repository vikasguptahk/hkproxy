import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import Navbar from '../navbar/Navbar';
import toast from 'react-hot-toast';

const Add = () => {
  const blockedsites= {
    url:"",
  }

  //const [user, setUser] = useState(users);
  const [blockedsite,setBlockedsite] = useState(blockedsites)
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setBlockedsite({...blockedsite, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:3005/api/create", blockedsite)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/blocked")
    })
    .catch(error => console.log(error))
  }


  return (
    <div>
      <Navbar/>
    <div className='addBlockedsite'>
        <Link to={"/"}>Back</Link>
        <h3>Add new Blocking sites</h3>
        <form className='addBlockedsiteForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
            </div>
             
            <div className="inputGroup">
                <button type="submit">ADD Blocked site URl</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Add