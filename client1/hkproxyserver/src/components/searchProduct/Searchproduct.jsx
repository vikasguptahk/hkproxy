
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import './searchproduct.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

import queryString from 'query-string';

import TextField from '@mui/material/TextField';
import { Autocomplete  } from '@mui/material';

const Productsite = () => {
    //const location = useLocation();
    //const {asin} = queryString.parse(location.search);
    const [deletingItemId, setDeletingItemId] = useState(null);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [productsites, setProductsites] = useState([]);
    const [query, setQuery] = React.useState('')
    const [searchedProducts, setSearchedProducts] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //        //const response = await axios.get('http://localhost:3005/api/product/getall');
    //        const response = await axios.get(`http://localhost:3005/api/product/getall/?asin=${asin}`)
    //         setProductsites(response.data);
    //     };
    //  fetchData();
    //  if(asin){
    //      setQuery(asin);
    //      handleSearch(asin);
    //  }
    // },
    // [asin])

 
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await axios.get('http://localhost:3005/api/product/getall');
            setProductsites(response.data);
        }
        fetchData();

    },[]);
    
    useEffect(()=>{
        if(query){
            handleSearch(query);
        }
    
    },[query]);
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get('http://localhost:3005/api/product/getall');
    //         setProductsites(response.data);
    //     };
    //     fetchData();
    //     if (asin) {
    //         setQuery(asin);
    //         handleSearch(asin);
    //     }
    // }, [asin]);



    const handleConfirmDelete = () => {
        deleteProductsite(deletingItemId);
        setConfirmDeleteOpen(false);
    };
     
    const top100Asins = [
        {label: 'ALL',value:'ALL'},
        {label: 'B09W5PSTBP', value:'B09W5PSTBP'},
        {label: 'B097L4CKPJ', value:'B097L4CKPJ'},

        {label: 'B0B4655BQ4', value:'B0B4655BQ4'},
        {label: 'B095X1HR54', value:'B095X1HR54'},
    ]

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
        const filteredProduct = productsites.filter(productsites => productsites.asin.includes(query));
        setSearchedProducts(filteredProduct);
        if(query === 'ALL'){
            setSearchedProducts(productsites);
        }
    }

    // const handleSearch = () =>{
    //     setQuery(asin);
    //     const filteredProduct = productsites.filter(productsites => productsites.asin.includes(query));
    //     setSearchedProducts(filteredProduct);
    // }
    // const handleManualSearch = () =>{
    //     setQuery(query);
    //     handleSearch(query);
    // }

    return (
        <div>
            <Navbar/>
        <div className="blockedsiteTable">
            <div className="blockedsite_heading">
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Asins}
                sx={{width:300}}
                renderInput={(params)=><TextField{...params} label="Search By ASIN" /> }
                value={query}
                onChange={(e,value) => setQuery(value.value)}
                />
                {/* <input type="text" placeholder='Enter ASIN value' value={query} onChange={(e) => setQuery(e.target.value)}/> */}
                {/* <Button onClick={()=>handleSearch(query)} className='searchButton'>Search</Button> */}
            </div>
            {searchedProducts.length > 0 && (
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            {/* <th>Delete</th> */}
                            <th>Url</th>
                            <th>RequestTime</th>
                            {/* <th>ResponseTime</th> */}
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {searchedProducts.map((productsite,index)=>(
                        <tr key={productsite._id}>
                            <td>{index +1}</td>
                            {/* <td className='actionButton'><Button onClick={() => setDeletingItemId(productsite._id)}><DeleteIcon/></Button></td> */}
                            <td align='left'>
                                <Link to ={`/product/details/${productsite._id}` } className="leftAlignedLind"
                                title={productsite.url.length>100?productsite.url.substring(0,100)+"...":productsite.url}>
                                    {productsite.url.length>40?productsite.url.substring(0,40)+"...":productsite.url};
                                </Link>
                            </td>
                            {/* <td>{productsite.url.length > 45 ? productsite.url.substring(0,45)+"...":productsite.url}</td> */}
                            <td>{new Date(productsite.timestamp_req*1000).toLocaleString()}</td>
                            <td>{new Date(productsite.timestamp_res*1000).toLocaleDateString()}</td>
                            <td>{productsite.response_code}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
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

/*
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            try {
                const response = await axios.get(`http://localhost:3005/api/product/search/${searchQuery}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error searching for ASIN:', error);
            }
        }
    };

    return (
        <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
            />
            <ul>
                {searchResults.map((result) => (
                    <li key={result._id}>
                        ASIN: {result.asin}, URL: {result.url}, Request Time: {result.req_time}, Response Time: {result.res_time}, Status: {result.status}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default SearchComponent;
*/