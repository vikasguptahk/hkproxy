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
import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';
import ReactPaginate from 'react-paginate';

const Modifiedsite = () => {

  const [deletingItemId,setDeletingItemId]=useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const [modifiedsites, setModifiedsites] = useState([]);

  const [pageNumber,setPageNumber] = useState(0);
  const ItemPerPage = 8;

//   useEffect(()=>{

//     const fetchData = async()=>{
//         const response = await axios.get("http://localhost:3005/api/modified/getall");
//         setModifiedsites(response.data);
//     }

//     fetchData();

//   },[])

    const fetchData = async(pageNumber,pageSize)=>{
        const response = await axios.get(`http://localhost:3005/api/modified/getall?page=${pageNumber}&pageSize=${pageSize}`)
        setModifiedsites(response.data);
    }

useEffect(()=>{
    fetchData(pageNumber,ItemPerPage);
},[pageNumber,ItemPerPage]);

const changePage = ({selected})=>{
    const pageNumber = selected +1;
    fetchData(pageNumber,ItemPerPage);
    setPageNumber(selected);
}
const pageCount = Math.ceil(modifiedsites.length/ItemPerPage);
const pageVisited = pageNumber * ItemPerPage;
const displayItems = modifiedsites.slice(pageVisited,pageVisited+ItemPerPage).map((modifiedsite,index)=>(
    <tr key={modifiedsite._id}>
        <td>{index+1}</td>
        <td><Button onClick={()=> setDeletingItemId(modifiedsite._id)} > <DeleteIcon/ ></Button> </td>
        {/* <td><EditIcon/></td>
        <td>{modifiedsite.url}</td> */}
        <td><Link to={`/modified/edit/${modifiedsite._id}`}> <EditIcon/></Link></td>
        <td><Link to={`/modified/details/${modifiedsite._id}`}>{modifiedsite.url}</Link></td>
    </tr>
))

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
    <div >
        <ResponsiveAppBar />
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading1'>
        <Link to={"add"} className='addButton'>Add Modifiedsites</Link>
         
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S. No.</th>
                     <th>Delete</th>
                     <th>Edit</th>
                     <th>Url</th>
                </tr>
            </thead>
            <tbody>{displayItems}</tbody>
                {/* {
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
                 */}
            {/* </tbody> */}
        </table>
        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
        />
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