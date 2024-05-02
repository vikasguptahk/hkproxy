
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import './productsite.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import Button1 from '@mui/material/Button';

import queryString from 'query-string';


const Productsite = () => {
    const [amazonSelected, setAmazonSelected] = useState(false);
    const [meeshoSelected, setMeeshoSelected] = useState(false);
    const [meeshoapiSelected, setMeeshoapiSelected] = useState(false);
    const [top100Asins, setTop100Asins] = useState([]);
    const [meeshousers, setmeeshoUsers] = useState([]);
    //const {asin} = queryString.parse(location.search);
    //const location = useLocation();
    const [deletingItemId, setDeletingItemId] = useState(null);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [productsites, setProductsites] = useState([]);
    const [productmsites, setProductmsites] = useState([])
    const [query,setQuery] = useState('');
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchedProductsm,setSearchedProductsm] = useState([]);
    const [selectedPlateform, setSelectedPlateform] = useState('');
    
    useEffect(() => {
        if (selectedPlateform === 'amazon') {
            setAmazonSelected(true);
        } else {
            setAmazonSelected(false);
        }
    }, [selectedPlateform]);

    
    useEffect(() => {
        if (selectedPlateform === 'meesho') {
            setMeeshoSelected(true);
        } else {
            setMeeshoSelected(false);
        }
    }, [selectedPlateform]);


    useEffect(()=>{
        const fetchAsins = async () => {
            try{
                const response = await axios.get('http://localhost:3005/api/product/getall/asin');
                const allAsins = ['ALL',...response.data];
                setTop100Asins(allAsins);
            }
            catch(err){
                console.error(err);
            }
        };
        fetchAsins();
    },[]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                const response = await axios.get('http://localhost:3005/api/productm/getall/users');
                const allmeeshousers= ['ALL',...response.data];
                setmeeshoUsers(allmeeshousers);
            }
            catch(err){
                console.error(err);
            }
        };
        fetchUsers();
    },[]);


    
    useEffect(()=>{
        if(selectedPlateform === 'amazon'){
            const fetchData = async() =>{
                const response = await axios.get('http://localhost:3005/api/product/getall');
                setProductsites(response.data);
            }
            fetchData();
        }
        else if(selectedPlateform === 'meesho'){
            const fetchData = async() =>{
                const response = await axios.get('http://localhost:3005/api/productm/getall');
                setProductmsites(response.data);
            }
            fetchData();
        }
    },[selectedPlateform])

    useEffect(()=>{
        if(query){
            handleSearch(query);
        }
    },[query])

    
     

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
    const handleSearch = async(query)=>{
        
        if (query === 'ALL') {
            if (selectedPlateform === 'amazon') {
                setSearchedProducts(productsites);
            } else if (selectedPlateform === 'meesho') {
                setSearchedProductsm(productmsites);
            }
        } else {
             
            const filteredProduct = productsites.filter(productsites => productsites.asin.includes(query));
            const filteredProductm = productmsites.filter(productmsites => productmsites.user_id.includes(query));
            setSearchedProductsm(filteredProductm);
            setSearchedProducts(filteredProduct);
        }
    }
    
    const selectPlateform = [
        {label:"amazon"},
        {label:"meesho"},
        {label:"flipkart"}
    ]
   

    return (
        <div>
            <Navbar/>
        <div className="blockedsiteTable">
            <div className="blockedsite_heading">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={selectPlateform}
                sx={{width:300}}
                renderInput={(params)=><TextField{...params} label="Select plateform" />}
                // onChange={(e)=>setSelectedPlateform(e.target.value)}/>
                onChange={(e, value) => {
                    if (value) {
                        setSelectedPlateform(value.label);
                    } else {
                        setSelectedPlateform(''); // Handle the case when the user clears the selection
                    }
                
                 }}
                 onInputChange={(e, newInputValue) => {
                    setSelectedPlateform(newInputValue);
                    
                    // Set the input value in selectedPlateform
                     // Set the input value in query for search functionality
                }}
                 />
                {amazonSelected && (
                <Autocomplete
                disablePortal
                id = "combo-box-demo"
                options={top100Asins.map(asin =>({label:asin,value:asin}))}
                sx={{width:300}}
                renderInput={(params)=><TextField{...params} label="Select By ASIN"/>}
                value={query}
                onChange={(e,value)=> setQuery(value.value)}
                onInputChange={(e, newInputValue)=>{
                    setQuery(newInputValue)
                }}
                />
                )}
                {
                    meeshoSelected && (
                        <Autocomplete 
                        disablePortal
                        id = "combo-box-demo"
                        options={meeshousers.map(user_id =>({label:user_id,value:user_id}))}
                        sx={{width:300}}
                        
                        renderInput={(params)=><TextField{...params} label="Select By Users"/>}
                        value={query}
                        onChange={(e,value)=>setQuery(value.value)}
                        onInputChange={(e, newInputValue) => {
                             setQuery(newInputValue)
                            
                            // Set the input value in selectedPlateform
                             // Set the input value in query for search functionality
                        }}
                        
                       
                        />
                    )
                }
                {
                    meeshoSelected && (
                        <Link
                        to={`/product/details/${searchedProducts.id}/?meeshoUrl=meeshoUrl`} >
                        <Button1 variant="contained" >API CALLS</Button1>
                        </Link>
                        
                        
                    )
                }
            
                
                {/* <Link to="/blocked" className="addButton">
                    Blocked site
                </Link> */}
                {/* <Link to="/product/add" className="addButton">
                    Add Product
                </Link> */}
                {/* <Link to="/modified" className="addButton">
                    Modified Site
                </Link> */}

            </div>
            {selectedPlateform === 'amazon' && (searchedProducts.length > 0) && (
                
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr><th>S. No.</th>
                         
                        <th>ASIN</th>
                        <th>Url</th>
                        <th>RequestTime</th>
                        {/* <th>ResponseTime</th> */}
                        <th>Date</th>
                        {/* <th>Status</th> */}
                    </tr>
                </thead>
                <tbody>
                    { 
                    
                    searchedProducts.map((productsite, index) => (
                        <tr key={productsite._id}>
                            <td>{index + 1}</td>
                            {/* <td className="actionButtons">
                                <Button onClick={() => setDeletingItemId(productsite._id)} className="btn_red">
                                    <DeleteIcon />
                                </Button>
                            </td>
                            <td>
                                <Link to={`/product/edit/${productsite._id}`}>
                                    <EditIcon />
                                </Link>
                            </td> */}
                            <td align='left'>
                                <Link 
                                to ={`searchproduct?asin=${productsite.asin}`} onClick={() => setQuery(productsite.asin)}
                                // onClick={()=> handleSearch(productsite.asin)}
                                 className='leftAlignedLink'>
                                    {productsite.asin}
                                    </Link>
                            </td>
                            <td align="left">
                                <Link to={`/product/details/${productsite._id}?selectedPlatform=${selectedPlateform}`} className="leftAlignedLink"
                                title={productsite.url}>
                                    {productsite.url.length > 30 ? productsite.url.substring(0,30)+"...":productsite.url}
                                </Link>
                            </td>
                            <td>{new Date(productsite.timestamp_req*1000).toLocaleString()}</td>
                            {/* <td>{new Date(productsite.timestamp_res*1000).toLocaleString()}</td> */}
                            <td>{productsite.date}</td>
                            {/* <td>{productsite.response_code}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
            {selectedPlateform === 'meesho' && (searchedProductsm.length > 0) && 
            (<table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr><th>S. No.</th>
                        <th>UserId/Phone Number</th>
                        <th>Url</th>
                        <th>RequestTime</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {searchedProductsm.map((productmsite, index) => (
                        <tr key={productmsite._id}>
                            <td>{index + 1}</td>
                            <td>{productmsite.user_id}</td>
                            
                            <td align="left">
                                <Link 
                                to={`/product/details/${productmsite._id}?selectedPlatform=${selectedPlateform}`} className="leftAlignedLink"
                                title={productmsite.url}>
                                    {productmsite.url.length > 30 ? productmsite.url.substring(0,30)+"...":productmsite.url}
                                </Link>
                            </td>
                            <td>{new Date(productmsite.timestamp_req*1000).toLocaleString()}</td>
                            {/* <td>{new Date(productsite.timestamp_res*1000).toLocaleString()}</td> */}
                            <td>{productmsite.response_code}</td>
                            {/* <td>{productsite.response_code}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            )

            }
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

 