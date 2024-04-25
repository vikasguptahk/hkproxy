import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import './productsite.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

const Productsite = () => {
    const [deletingItemId, setDeletingItemId] = useState(null);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [productsites, setProductsites] = useState([]);
    const [query,setQuery] = useState('');
    const [searchedProducts, setSearchedProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3005/api/product/getall');
            setProductsites(response.data);
        };
        fetchData();
    }, []);

    const handleConfirmDelete = () => {
        deleteProductsite(deletingItemId);
        setConfirmDeleteOpen(false);
    };

    const handleCancelDelete = () => {
        setDeletingItemId(null);
        setConfirmDeleteOpen(false);
    };

    const deleteProductsite = async (productsiteId) => {
        await axios
            .delete(`http://localhost:3005/api/product/delete/${productsiteId}`)
            .then((response) => {
                setProductsites((prevProductsite) => prevProductsite.filter((productsite) => productsite._id !== productsiteId));
                toast.success(response.data.msg, { position: 'top-right' });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleSearch = async(asin)=>{
        setQuery(asin);
        const filteredProduct = productsites.filter((productsites)=>productsites.asin.includes(asin));
        setSearchedProducts(filteredProduct);
    }

    return (
        <div>
            <Navbar/>
        <div className="blockedsiteTable">
            <div className="blockedsite_heading">
                <Link to="/blocked" className="addButton">
                    Blocked site
                </Link>
                <Link to="/product/add" className="addButton">
                    Add Product
                </Link>
                <Link to="/modified" className="addButton">
                    Modified Site
                </Link>
            </div>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr><th>S. No.</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>ASIN</th>
                        <th>Url</th>
                        <th>RequestTime</th>
                        <th>ResponseTime</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {productsites.map((productsite, index) => (
                        <tr key={productsite._id}>
                            <td>{index + 1}</td>
                            <td className="actionButtons">
                                <Button onClick={() => setDeletingItemId(productsite._id)} className="btn_red">
                                    <DeleteIcon />
                                </Button>
                            </td>
                            <td>
                                <Link to={`/product/edit/${productsite._id}`}>
                                    <EditIcon />
                                </Link>
                            </td>
                            <td align='left'>
                                <Link 
                                to ={`searchproduct?asin=${productsite.asin}`} onClick={() => setQuery(productsite.asin)}
                                // onClick={()=> handleSearch(productsite.asin)}
                                 className='leftAlignedLink'>
                                    {productsite.asin}
                                    </Link>
                            </td>
                            <td align="left">
                                <Link to={`/product/details/${productsite._id}`} className="leftAlignedLink">
                                    {productsite.url}
                                </Link>
                            </td>
                            <td>{new Date(productsite.timestamp_req*1000).toLocaleString()}</td>
                            <td>{new Date(productsite.timestamp_res*1000).toLocaleString()}</td>
                            <td>{productsite.date}</td>
                            <td>{productsite.response_code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog open={Boolean(deletingItemId)} onClose={handleCancelDelete}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContentText>Are you sure?</DialogContentText>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        </div>
    );
};

export default Productsite;
