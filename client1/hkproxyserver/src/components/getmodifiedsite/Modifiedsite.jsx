import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./modifiedsite.css"
import Navbar from '../navbar/Navbar';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

const Modifiedsite = () => {

  const [deletingItemId,setDeletingItemId]=useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const [modifiedsites, setModifiedsites] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:3005/api/modified/getall");
        setModifiedsites(response.data);
    }

    fetchData();

  },[])

  const handleConfirmDelete =()=>{
    deleteModifiedsite(deletingItemId);
    setConfirmDeleteOpen(false);
  }
  const handleCancelDelete =()=>{
    setDeletingItemId(null);
    setConfirmDeleteOpen(false);
  }

  const deleteModifiedsite = async(modifiedsiteId) =>{
      await axios.delete(`http://localhost:3005/api/modified/delete/${modifiedsiteId}`)
      .then((respones)=>{
        setModifiedsites((prevModifiedsite)=> prevModifiedsite.filter((modifiedsite)=> modifiedsite._id !== modifiedsiteId))
        toast.success(respones.data.msg, {position: 'top-right'})
      })
      .catch((error) =>{
        console.log(error);
      })
  }
  

  return (
    <div>
        <Navbar/>
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading1'>
            {/* <h2>Modified site table</h2> */}
        <Link to={"add"} className='addButton'>Add Modifiedsites</Link>
        {/* <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspected Site</Link>
        <Link to={"/blocked"} className='addButton' cellPadding="10px">Blocked site</Link> */}
        
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S. No.</th>
                     <th>Delete</th>
                     <th>Edit</th>
                     <th>Url</th>
                </tr>
            </thead>
            <tbody>
                {
                    modifiedsites.map((modifiedsite,index)=>{
                        return(
                        <tr key={modifiedsite._id}>
                            <td>{index + 1}</td>
                            
                            
                            <td>
                                <Button onClick={()=> setDeletingItemId(modifiedsite._id)} >
                                    <DeleteIcon/ >
                                </Button>
                                
                            </td>
                            <td>
                                   <Link to={`/modified/edit/${modifiedsite._id}`}> <EditIcon/></Link>
                            </td>
                            <td>
                               <Link to={`/modified/details/${modifiedsite._id}`}>{modifiedsite.url}</Link>
                            </td>


                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
        <Dialog open={Boolean(deletingItemId)} onClick={handleCancelDelete}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContentText>Are you sure?</DialogContentText>
            <DialogActions>
                <Button onClick={handleCancelDelete}>Cancel</Button>
                <Button onClick={handleConfirmDelete}>Confirm</Button>
            </DialogActions>
        </Dialog>

    </div>
    </div>
    </div>
  )
}

export default Modifiedsite