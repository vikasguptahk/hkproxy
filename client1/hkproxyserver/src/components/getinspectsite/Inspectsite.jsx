// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Navbar from '../navbar/Navbar';
// import './inspectsite.css';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { Link } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

// const PAGE_SIZE = 10;

// const Inspectsite = () => {
//     const [deletingItemId, setDeletingItemId] = useState(null);
//     const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
//     const [inspectsites, setInspectsites] = useState([]);
//     const [currentPage,setCurrentPage] = useState(1);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get(`http://localhost:3005/api/inspect/getall?page=${currentPage}&pageSize=${PAGE_SIZE}`);
//             setInspectsites(response.data);
//         };
//         fetchData();
//     }, [
// //
//         currentPage
//     ]);

//     const handleConfirmDelete = () => {
//         deleteInspectsite(deletingItemId);
//         setConfirmDeleteOpen(false);
//     };

//     const handleCancelDelete = () => {
//         setDeletingItemId(null);
//         setConfirmDeleteOpen(false);
//     };

//     const deleteInspectsite = async (inspectsiteId) => {
//         await axios
//             .delete(`http://localhost:3005/api/inspect/delete/${inspectsiteId}`)
//             .then((response) => {
//                 setInspectsites((prevInspectsite) => prevInspectsite.filter((inspectsite) => inspectsite._id !== inspectsiteId));
//                 toast.success(response.data.msg, { position: 'top-right' });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
//     const handlePageChange = (pageNumber) =>{
//         setCurrentPage(pageNumber);
//     }

//     return (
//         <div>
//             <Navbar/>
//         <div className="blockedsiteTable">
//             <div className="blockedsite_heading">
//                 <Link to="/blocked" className="addButton">
//                     Blocked site
//                 </Link>
//                 <Link to="/inspect/add" className="addButton">
//                     Add Inspected Site
//                 </Link>
//                 <Link to="/modified" className="addButton">
//                     Modified Site
//                 </Link>
//             </div>
//             <table border={1} cellPadding={10} cellSpacing={0}>
//                 <thead>
//                     <tr>
//                         <th>S. No.</th>
//                         <th>Delete</th>
//                         <th>Edit</th>
//                         <th>Url</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {inspectsites.map((inspectsite, index) => (
//                         <tr key={inspectsite._id}>
//                             <td>{index + 1}</td>
//                             <td className="actionButtons">
//                                 <Button onClick={() => setDeletingItemId(inspectsite._id)} className="btn_red">
//                                     <DeleteIcon />
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Link to={`/inspect/edit/${inspectsite._id}`}>
//                                     <EditIcon />
//                                 </Link>
//                             </td>
//                             <td align="left">
//                                 <Link to={`/inspect/details/${inspectsite._id}`} className="leftAlignedLink">
//                                     {inspectsite.url}
//                                 </Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div className='pagination'>
//                 <Button disabled={currentPage==1} onClick={()=>handlePageChange(currentPage-1)}>Previous</Button>
//                 <Button onClick={()=>handlePageChange(currentPage+1)}>Next</Button>
//             </div>
//             <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
//                 <DialogTitle>Confirm Delete</DialogTitle>
//                 <DialogContentText>Are you sure?</DialogContentText>
//                 <DialogActions>
//                     <Button onClick={handleCancelDelete} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleConfirmDelete} color="primary">
//                         Confirm
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//         </div>
//     );
// };

// export default Inspectsite;

//-----------------------------------<>--------------------------------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Navbar from '../navbar/Navbar';
// import './inspectsite.css';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { Link } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

 

// const Inspectsite = () => {
//     const [deletingItemId, setDeletingItemId] = useState(null);
//     const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
//     const [inspectsites, setInspectsites] = useState([]);
    
//     useEffect(()=>{
//         const fetchData = async () =>{
//             const response = await axios.get(`http://localhost:3005/api/inspect/getall`)
//             setInspectsites(response.data);
//         }
//         fetchData();
//     },[])

//     const handleConfirmDelete = () => {
//         deleteInspectsite(deletingItemId);
//         setConfirmDeleteOpen(false);
//     };

//     const handleCancelDelete = () => {
//         setDeletingItemId(null);
//         setConfirmDeleteOpen(false);
//     };

//     const deleteInspectsite = async (inspectsiteId) => {
//         await axios
//             .delete(`http://localhost:3005/api/inspect/delete/${inspectsiteId}`)
//             .then((response) => {
//                 setInspectsites((prevInspectsite) => prevInspectsite.filter((inspectsite) => inspectsite._id !== inspectsiteId));
//                 toast.success(response.data.msg, { position: 'top-right' });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

  
//     return (
//         <div>
            
//             <div className="blockedsiteTable">
//                 <div className="blockedsite_heading">
                    
//                     <Link to="/inspect/add" className="addButton">
//                         Add Inspected Site
//                     </Link>
//                     <Navbar />
                    
//                 </div>
//                 <table border={1} cellPadding={10} cellSpacing={0}>
//                     <thead>
//                         <tr>
//                             <th>S. No.</th>
//                             <th>Delete</th>
//                             <th>Edit</th>
//                             <th>Url</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {inspectsites.map((inspectsite, index) => (
//                             <tr key={inspectsite._id}>
//                                 <td>{index + 1}</td>
//                                 <td className="actionButtons">
//                                     <Button onClick={() => setDeletingItemId(inspectsite._id)} className="btn_red">
//                                         <DeleteIcon />
//                                     </Button>
//                                 </td>
//                                 <td>
//                                     <Link to={`/inspect/edit/${inspectsite._id}`}>
//                                         <EditIcon />
//                                     </Link>
//                                 </td>
//                                 <td align="left">
//                                     <Link to={`/inspect/details/${inspectsite._id}`} className="leftAlignedLink"
//                                     title={inspectsite.url}>

//                                         {inspectsite.url.length > 45 ? inspectsite.url.substring(0, 45)+"...":inspectsite.url}
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
                 
//                 <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
//                     <DialogTitle>Confirm Delete</DialogTitle>
//                     <DialogContentText>Are you sure?</DialogContentText>
//                     <DialogActions>
//                         <Button onClick={handleCancelDelete} color="primary">
//                             Cancel
//                         </Button>
//                         <Button onClick={handleConfirmDelete} color="primary">
//                             Confirm
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         </div>
//     );
// };

// export default Inspectsite;

// -------------------------------------------------------##############--------------------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import './inspectsite.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';
import ReactPaginate from 'react-paginate';

const Inspectsite = () =>{
    const [deletingItemId, setDeletingItemId] = useState(null);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
    const [inspectsites, setInspectsites] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(()=>{
        fetchData(1,6);
    },[]);
    const fetchData = async(pageNumber,pageSize) =>{
        const response = await axios.get(`http://localhost:3005/api/inspect/getall?page=${pageNumber}&pageSize=${pageSize}`);
        setInspectsites(response.data);
    }
    const handleCancelDelete = () => {
        setDeletingItemId(null);
        setConfirmDeleteOpen(false);
    }
    const handleConfirmDelete = () => {
        deleteInspectsite(deletingItemId);
        setConfirmDeleteOpen(false);
    }
    const deleteInspectsite = async (inspectsiteId) => {
        await axios
        .delete(`http://localhost:3005/api/inspect/delete/${inspectsiteId}`)
        .then((response) => {
            setInspectsites((prevInspectsite) => prevInspectsite.filter((inspectsite) => inspectsite._id !== inspectsiteId));
            toast.success(response.data.msg,{position:'top-left'});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const pageCount = Math.ceil(inspectsites.length/6);
    const pageVisited = pageNumber * 6;

    const displayItems = inspectsites
                         .slice(pageVisited, pageVisited + 6)
                         .map((inspectsite, index) => (
                            <tr key={inspectsite._id}>
                                <td>{index +1}</td>
                                <td className='actionButtons'>
                                    <Button onClick={()=> setDeletingItemId(inspectsite._id)} className="btn_red"><DeleteIcon/></Button>
                                </td>
                                <td>
                                    <Link to={`/inspect/edit/${inspectsite._id}`}><EditIcon/></Link>
                                </td>
                                <td align='left'>
                                    <Link to={`/inspect/details/${inspectsite._id}`} className='leftAlignLink' title={inspectsite.url}>
                                        {inspectsite.url.length > 45 ? inspectsite.url.substring(0, 45) + '...':inspectsite.url}
                                    </Link>
                                </td>
                            </tr>
                         ));
    const changePage  = ({selected}) => {
        const pageNumber = selected + 1;
        fetchData(pageNumber,6);
        setPageNumber(selected);
    };
    return (
        <div>
            <Navbar/>
            <div className="blockedsiteTable">
                <Link to='/inspect/add' className='addButton'>Add Inspected Site</Link>
                
            {/* </div> */}
            <table border={1} cellPadding={6} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>{displayItems}</tbody>
            </table>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination'}
                activeClassName={'active'}
                />
            </div>
                <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContentText>Are you sure?</DialogContentText>
                    <DialogActions>
                        <Button onClick={handleCancelDelete} color="primary">Cancel</Button>
                        <Button onClick={handleConfirmDelete} color="primary">Delete</Button>
                    </DialogActions>
                </Dialog>
        </div>
    )

}

export default Inspectsite;


