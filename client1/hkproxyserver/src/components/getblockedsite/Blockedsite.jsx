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
import { selectClasses } from '@mui/material';
import ReactPaginate from 'react-paginate';
import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';

const Blockedsite = () => {

  const [deletingItemId,setDeletingItemId] = useState(null);
  const [blockedsites, setBlockedsites] = useState([]);
  const [confirmDeleteOpen,setConfirmDeleteOpen] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const ItemPerPage=6;
  useEffect(()=>{
    fetchData(pageNumber,ItemPerPage)
  },[])
  
  const fetchData = async(pageNumber,pageSize)=>{
          const response = await axios.get(`http://localhost:3005/api/getall?page=${pageNumber}&pageSize=${pageSize}`);
  
          setBlockedsites(response.data);
      }


  const handleConfirmDelete =()=>{
    deleteBlockedsite(deletingItemId);
    setConfirmDeleteOpen(false);
    handleCancelDelete();
    
  }

  const handleCancelDelete =()=>{
    setDeletingItemId(null);
    setConfirmDeleteOpen(false);
  }

 

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

  const pageCount = Math.ceil(blockedsites.length/ItemPerPage);
  const pageVisited = pageNumber * ItemPerPage;
  const displayItems = blockedsites
                      .slice(pageVisited,pageVisited+ItemPerPage)
                      .map((blockedsite,index)=>(
                        <tr key={blockedsite._id}>
                          <td>{index + 1}</td>
                          <td><Button onClick={()=> setDeletingItemId(blockedsite._id)}  ><DeleteIcon/></Button></td>
                          <td><Link to={`/blocked/edit/${blockedsite._id}`}><EditIcon /></Link></td>
                          <td>{blockedsite.url}</td>
                        </tr>
                             ));
const changePage = ({selected}) =>{
  const pageNumber = selected +1;
  fetchData(pageNumber,ItemPerPage);
  setPageNumber(selected)
}

  return (
    <div>
      <ResponsiveAppBar/>
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading1'>
        <Link to={"/add"} className='addButton'>Add Blockedsites</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Delete</th>
                     <th>Update</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>{displayItems}</tbody>
        </table>
        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
        />
        <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContentText align='center'>Are you sure?</DialogContentText>
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


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';
// import ReactPaginate from 'react-paginate';

// const Blockedsite = ({ isLoggedIn }) => {
//   const [blockedsites, setBlockedsites] = useState([]);
//   const [deletingItemId, setDeletingItemId] = useState(null);
//   const [pageNumber, setPageNumber] = useState(0);
//   const ItemPerPage = 5;

//   useEffect(() => {
//     fetchData(pageNumber + 1, ItemPerPage);
//   }, [pageNumber]);

//   const fetchData = async (page, limit) => {
//     const response = await axios.get(`http://localhost:3005/api/blockedsites?page=${page}&limit=${limit}`);
//     setBlockedsites(response.data);
//   };

//   const deleteBlockedsite = async (blockedsiteId) => {
//     await axios.delete(`http://localhost:3005/api/delete/${blockedsiteId}`)
//       .then((response) => {
//         setBlockedsites((prevBlockedsite) => prevBlockedsite.filter((blockedsite) => blockedsite._id !== blockedsiteId));
//         toast.success(response.data.msg, { position: 'top-right' });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const pageCount = Math.ceil(blockedsites.length / ItemPerPage);
//   const pageVisited = pageNumber * ItemPerPage;
//   const displayItems = blockedsites
//     .slice(pageVisited, pageVisited + ItemPerPage)
//     .map((blockedsite, index) => (
//       <tr key={blockedsite._id}>
//         <td>{index + 1}</td>
//         <td><Button onClick={() => setDeletingItemId(blockedsite._id)}><DeleteIcon /></Button></td>
//         <td><Link to={`/blocked/edit/${blockedsite._id}`}><EditIcon /></Link></td>
//         <td>{blockedsite.url}</td>
//       </tr>
//     ));

//   const changePage = ({ selected }) => {
//     const pageNumber = selected + 1;
//     fetchData(pageNumber, ItemPerPage);
//     setPageNumber(selected);
//   };

//   return isLoggedIn ? (
//     <div className='slkd'>
//       <ResponsiveAppBar />
//       <div className='blockedsiteTable'>
//         <div className='blockedsite_heading1'>

//           <Link to={"/add"} className='addButton'>Add Blockedsites</Link>

//           <table border={1} cellPadding={10} cellSpacing={0}>
//             <thead>
//               <tr>
//                 <th>S. No.</th>
//                 <th>Delete</th>
//                 <th>Update</th>
//                 <th>URL</th>
//               </tr>
//             </thead>
//             <tbody>{displayItems}</tbody>
//           </table>
//           <ReactPaginate
//             previousLabel={'Previous'}
//             nextLabel={'next'}
//             pageCount={pageCount}
//             onPageChange={changePage}
//             containerClassName={'pagination'}
//             activeClassName={'active'}
//           />
//           <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
//             <DialogTitle>Confirm Delete</DialogTitle>
//             <DialogContentText align='center'>Are you sure?</DialogContentText>
//             <DialogActions>
//               <Button onClick={handleCancelDelete} color="primary">Cancel</Button>
//               <Button onClick={handleConfirmDelete} color="primary">Confirm</Button>
//             </DialogActions>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default Blockedsite;
