import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./inspectsite.css"

//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import Details from '@material-ui/icons/Details';
import { Link } from 'react-router-dom'



const Inspectsite = () => {

  const [inspectsites, setInspectsites] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:3005/api/inspect/getall");
        setInspectsites(response.data);
    }

    fetchData();

  },[])

  const deleteInspectsite = async(inspectsiteId) =>{
      await axios.delete(`http://localhost:3005/api/inspect/delete/${inspectsiteId}`)
      .then((respones)=>{
        setInspectsites((prevInspectsite)=> prevInspectsite.filter((inspectsite)=> inspectsite._id !== inspectsiteId))
        toast.success(respones.data.msg, {position: 'top-right'})
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading'>
        <Link to={"/blocked"} className='addButton'>Blocked site</Link>
        <Link to={"/inspect/add"} className='addButton' cellPadding="10px">Add Inspected Site</Link>
         
         
        <table border={1} cellPadding={10} cellSpacing={0} >
            <thead>
                Inspect Site
                <tr>
                    <th>S. No.</th>
                    <th>Url</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    inspectsites.map((inspectsite,index)=>{
                        return(
                        <tr key={inspectsite._id}>
                            <td>{index + 1}</td>
                            <td>
                               <Link to={`/inspect/details/${inspectsite._id}`}>{inspectsite.url}</Link>
                            </td>
                    
                            <td className='actionButtons'>
                                <Button onClick={()=> deleteInspectsite(inspectsite._id)} className='btn_red'>
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

export default Inspectsite