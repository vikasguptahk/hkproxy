import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./sites.css";
import toast from 'react-hot-toast';

const Sitestable = () => {
  return (
    <div className='addBlockedsite'>
        <form className='addBlockedsiteForm' >
            <div className="inputGroup">
                <Link to={"/inspect"}>
                <button>Inspect Site Table</button>
                </Link>
                <Link to={"/modified"}>
                <button>Modified Site Table</button>
                </Link>
                <Link to={"/blocked"}>
                <button>Blocked Site Table</button>
                </Link>
                
            </div>
        </form>
    </div>
  )
}

export default Sitestable