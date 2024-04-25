import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./sites.css";
import toast from 'react-hot-toast';
import Navbar from "../navbar/Navbar"
const Sitestable = () => {
  return (
    <div>
      <Navbar/>
    <div className='addBlockedsite'>
      
        <form className='addBlockedsiteForm' >
            <div className="inputGroup">
               <div className='inspect'>
               <Link to={"/inspect"}>
                <button>Inspect Site Table</button>
                </Link>

               </div>
               <div className='modified'>
               <Link to={"/modified"}>
                <button>Modified Site Table</button>
                </Link>

               </div>
               <div className="blocked">
               <Link to={"/blocked"}>
                <button>Blocked Site Table</button>
                </Link>

               </div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Sitestable