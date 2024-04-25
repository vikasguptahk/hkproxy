import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./blockedsite.css"
import Navbar from '../navbar/Navbar';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

const Blockedsite = () => {

  const [deletingItemId,setDeletingItemId] = useState(null);
  const [blockedsites, setBlockedsites] = useState([]);
  const [confirmDeleteOpen,setConfirmDeleteOpen] = useState(false);
  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:3005/api/getall");
        setBlockedsites(response.data);
    }

    fetchData();

  },[])

  const handleConfirmDelete =()=>{
    deleteBlockedsite(deletingItemId);
    setConfirmDeleteOpen(false);
  }

  const handleCancelDelete =()=>{
    setDeletingItemId(null);
    setConfirmDeleteOpen(false);
  }

/*
  const ConfirmDeleteDialog =({open,onClose,onConfirm})=>{
    <Dialog open={open} onClose={onClose}>
        <DialogTitel>Confirm Delete</DialogTitel>
        <DialogContentText>Are you sure you want to delete this</DialogContentText>
        <DialogActions>
            <Button onClick={onClose} color='primary'>Cancel</Button>
            <Button onClick={onConfirm} color='primary' autoFocus>Confirm</Button>
        </DialogActions>
    </Dialog>
  }
  */

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
    <div>
      <Navbar/>
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading'>
            <h2>Blocked site table</h2>
        <Link to={"/add"} className='addButton'>Add Blockedsites</Link>
        <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspected Site</Link>
        <Link to={"/modified"} className='addButton' cellPadding="10px">Modified Site</Link>
        
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Delete</th>
                     <th>Update</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blockedsites.map((blockedsite,index)=>{
                        return(
                        <tr key={blockedsite._id}>
                            <td>{index + 1}</td>
                            
                            <td>
                                <Button onClick={()=> setDeletingItemId(blockedsite._id)}  >
                                    <DeleteIcon/>
                                </Button>
                            </td>
                            <td>
                                <Link to={`/blocked/edit/${blockedsite._id}`}>
                                    <EditIcon />
                                </Link>
                            </td>
                            <td>{blockedsite.url}</td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
        <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContentText>Are you sure?</DialogContentText>
            <DialogActions>
                <Button onClick={handleCancelDelete} color="primary">Cancel</Button>
                <Button onClick={handleConfirmDelete} color="primary">Confirm</Button>
            </DialogActions>
        </Dialog>
    </div>
    </div>
    </div>
  )
}

export default Blockedsite