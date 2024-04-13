import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./blockedsite.css"

//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'

const Blockedsite = () => {

  const [blockedsites, setBlockedsites] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:3005/api/getall");
        setBlockedsites(response.data);
    }

    fetchData();

  },[])

  const deleteBlockedsite = async(blockedsiteId) =>{
      await axios.delete(`http://localhost:3005/api/delete/${blockedsiteId}`)
      .then((respones)=>{
        setBlockedsites((prevBlockedsite)=> prevBlockedsite.filter((blockedsite)=> blockedsite._id !== blockedsiteId))
        toast.success(respones.data.msg, {position: 'top-right'})
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading'>
            <h2>Blocked site table</h2>
        <Link to={"/add"} className='addButton'>Add Blockedsites</Link>
        <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspected Site</Link>
        
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Url</th>
                     
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blockedsites.map((blockedsite,index)=>{
                        return(
                        <tr key={blockedsite._id}>
                            <td>{index + 1}</td>
                            <td>{blockedsite.url}</td>
                            <td className='actionButtons'>
                                <Button onClick={()=> deleteBlockedsite(blockedsite._id)} className='btn_red'>
                                    <DeleteIcon/>
                                </Button>
                                
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Blockedsite