
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Navbar from '../navbar/Navbar';
// import './productsite.css';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { Link, useLocation } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';

// import TextField from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material';
// import Button1 from '@mui/material/Button';

// import queryString from 'query-string';


// const Productsite = () => {
//     const [amazonSelected, setAmazonSelected] = useState(false);
//     const [meeshoSelected, setMeeshoSelected] = useState(false);
//     const [meeshoapiSelected, setMeeshoapiSelected] = useState(false);
//     const [top100Asins, setTop100Asins] = useState([]);
//     const [meeshousers, setmeeshoUsers] = useState([]);
//     //const {asin} = queryString.parse(location.search);
//     //const location = useLocation();
//     const [deletingItemId, setDeletingItemId] = useState(null);
//     const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
//     const [productsites, setProductsites] = useState([]);
//     const [productmsites, setProductmsites] = useState([])
//     const [query,setQuery] = useState('');
//     const [searchedProducts, setSearchedProducts] = useState([]);
//     const [searchedProductsm,setSearchedProductsm] = useState([]);
//     const [selectedPlatform, setSelectedPlatform] = useState('');
    
//     const [selectedPlatforms, setSelectedPlatforms]  = useState([]);
//     useEffect ( () => {
//         const fetchPlatforms = async () => {
//         try{
//             const response = await axios.get('http://localhost:3005/api/inspect/getall/platform');
//             const platforms = response.data.map(platform => ({
//                 label:platform,
//                 value: platform
//             }));
//             setSelectedPlatforms(platforms)
//         } catch (error){
//             console.error(error);
//         };
//         }
//         fetchPlatforms();
        
//     },[]);

//     useEffect(() => {
//         if (selectedPlatform === 'amazon') {
//             setAmazonSelected(true);
//         } else {
//             setAmazonSelected(false);
//         }
//     }, [selectedPlatform]);

    
//     useEffect(() => {
//         if (selectedPlatform === 'meesho') {
//             setMeeshoSelected(true);
//         } else {
//             setMeeshoSelected(false);
//         }
//     }, [selectedPlatform]);


//     useEffect(()=>{
//         const fetchAsins = async () => {
//             try{
//                 const response = await axios.get('http://localhost:3005/api/product/getall/asin');
//                 const allAsins = ['ALL',...response.data];
//                 setTop100Asins(allAsins);
//             }
//             catch(err){
//                 console.error(err);
//             }
//         };
//         fetchAsins();
//     },[]);

//     useEffect(()=>{
//         const fetchUsers = async () => {
//             try{
//                 const response = await axios.get('http://localhost:3005/api/productm/getall/users');
//                 const allmeeshousers= ['ALL',...response.data];
//                 setmeeshoUsers(allmeeshousers);
//             }
//             catch(err){
//                 console.error(err);
//             }
//         };
//         fetchUsers();
//     },[]);


    
//     useEffect(()=>{
//         if(selectedPlatform === 'amazon'){
//             const fetchData = async() =>{
//                 const response = await axios.get('http://localhost:3005/api/product/getall');
//                 setProductsites(response.data);
//             }
//             fetchData();
//         }
//         else if(selectedPlatform === 'meesho'){
//             const fetchData = async() =>{
//                 const response = await axios.get('http://localhost:3005/api/productm/getall');
//                 setProductmsites(response.data);
//             }
//             fetchData();
//         }
//     },[selectedPlatform])

//     useEffect(()=>{
//         if(query){
//             handleSearch(query);
//         }
//     },[query])

    
     

//     const handleConfirmDelete = () => {
//         deleteProductsite(deletingItemId);
//         setConfirmDeleteOpen(false);
//     };

//     const handleCancelDelete = () => {
//         setDeletingItemId(null);
//         setConfirmDeleteOpen(false);
//     };

//     const deleteProductsite = async (productsiteId) => {
//         await axios
//             .delete(`http://localhost:3005/api/product/delete/${productsiteId}`)
//             .then((response) => {
//                 setProductsites((prevProductsite) => prevProductsite.filter((productsite) => productsite._id !== productsiteId));
//                 toast.success(response.data.msg, { position: 'top-right' });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
//     const handleSearch = async(query)=>{
        
//         if (query === 'ALL') {
//             if (selectedPlatform === 'amazon') {
//                 setSearchedProducts(productsites);
//             } else if (selectedPlatform === 'meesho') {
//                 setSearchedProductsm(productmsites);
//             }
//         } else {
             
//             const filteredProduct = productsites.filter(productsites => productsites.asin.includes(query));
//             const filteredProductm = productmsites.filter(productmsites => productmsites.user_id.includes(query));
//             setSearchedProductsm(filteredProductm);
//             setSearchedProducts(filteredProduct);
//         }
//     }
    
//     // const selectPlateform = [
//     //     {label:"amazon"},
//     //     {label:"meesho"},
//     //     {label:"flipkart"}
//     // ]
   

//     return (
//         <div>
//             <Navbar/>
//         <div className="blockedsiteTable">
//             <div className="blockedsite_heading">
//             <Autocomplete
//                 disablePortal
//                 id="combo-box-demo"
//                 options={selectedPlatforms}
//                 sx={{width:300}}
//                 renderInput={(params)=><TextField{...params} label="Select platform" />}
//                 // onChange={(e)=>setSelectedPlatform(e.target.value)}/>
//                 onChange={(e, value) => {
//                     if (value) {
//                         setSelectedPlatform(value.label);
//                     } else {
//                         setSelectedPlatform(''); // Handle the case when the user clears the selection
//                     }
                
//                  }}
//                  onInputChange={(e, newInputValue) => {
//                     setSelectedPlatform(newInputValue);
                    
//                     // Set the input value in selectedPlatform
//                      // Set the input value in query for search functionality
//                 }}
//                  />
//                 {amazonSelected && (
//                 <Autocomplete
//                 disablePortal
//                 id = "combo-box-demo"
//                 options={top100Asins.map(asin =>({label:asin,value:asin}))}
//                 sx={{width:300}}
//                 renderInput={(params)=><TextField{...params} label="Select By ASIN"/>}
//                 value={query}
//                 onChange={(e,value)=> setQuery(value.value)}
//                 onInputChange={(e, newInputValue)=>{
//                     setQuery(newInputValue)
//                 }}
//                 />
//                 )}
//                 {
//                     meeshoSelected && (
//                         <Autocomplete 
//                         disablePortal
//                         id = "combo-box-demo"
//                         options={meeshousers.map(user_id =>({label:user_id,value:user_id}))}
//                         sx={{width:300}}
                        
//                         renderInput={(params)=><TextField{...params} label="Select By Users"/>}
//                         value={query}
//                         onChange={(e,value)=>setQuery(value.value)}
//                         onInputChange={(e, newInputValue) => {
//                              setQuery(newInputValue)
                            
//                             // Set the input value in selectedPlatform
//                              // Set the input value in query for search functionality
//                         }}
                        
                       
//                         />
//                     )
//                 }
//                 {
//                     meeshoSelected && (
//                         <Link
//                         to={`/product/details/${searchedProducts.id}/?meeshoUrl=meeshoUrl`} >
//                         <Button1 variant="contained" >API CALLS</Button1>
//                         </Link>
                        
                        
//                     )
//                 }
            
                
//                 {/* <Link to="/blocked" className="addButton">
//                     Blocked site
//                 </Link> */}
//                 {/* <Link to="/product/add" className="addButton">
//                     Add Product
//                 </Link> */}
//                 {/* <Link to="/modified" className="addButton">
//                     Modified Site
//                 </Link> */}

//             </div>
//             {selectedPlatform === 'amazon' && (searchedProducts.length > 0) && (
                
//             <table border={1} cellPadding={10} cellSpacing={0}>
//                 <thead>
//                     <tr><th>S. No.</th>
                         
//                         <th>ASIN</th>
//                         <th>Url</th>
//                         <th>RequestTime</th>
//                         {/* <th>ResponseTime</th> */}
//                         <th>Date</th>
//                         {/* <th>Status</th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     { 
                    
//                     searchedProducts.map((productsite, index) => (
//                         <tr key={productsite._id}>
//                             <td>{index + 1}</td>
//                             {/* <td className="actionButtons">
//                                 <Button onClick={() => setDeletingItemId(productsite._id)} className="btn_red">
//                                     <DeleteIcon />
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Link to={`/product/edit/${productsite._id}`}>
//                                     <EditIcon />
//                                 </Link>
//                             </td> */}
//                             <td align='left'>
//                                 <Link 
//                                 to ={`searchproduct?asin=${productsite.asin}`} onClick={() => setQuery(productsite.asin)}
//                                 // onClick={()=> handleSearch(productsite.asin)}
//                                  className='leftAlignedLink'>
//                                     {productsite.asin}
//                                     </Link>
//                             </td>
//                             <td align="left">
//                                 <Link to={`/product/details/${productsite._id}?selectedPlatform=${selectedPlatform}`} className="leftAlignedLink"
//                                 title={productsite.url}>
//                                     {productsite.url.length > 30 ? productsite.url.substring(0,30)+"...":productsite.url}
//                                 </Link>
//                             </td>
//                             <td>{new Date(productsite.timestamp_req*1000).toLocaleString()}</td>
//                             {/* <td>{new Date(productsite.timestamp_res*1000).toLocaleString()}</td> */}
//                             <td>{productsite.date}</td>
//                             {/* <td>{productsite.response_code}</td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             )}
//             {selectedPlatform === 'meesho' && (searchedProductsm.length > 0) && 
//             (<table border={1} cellPadding={10} cellSpacing={0}>
//                 <thead>
//                     <tr><th>S. No.</th>
//                         <th>UserId/Phone Number</th>
//                         <th>Url</th>
//                         <th>RequestTime</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {searchedProductsm.map((productmsite, index) => (
//                         <tr key={productmsite._id}>
//                             <td>{index + 1}</td>
//                             <td>{productmsite.user_id}</td>
                            
//                             <td align="left">
//                                 <Link 
//                                 to={`/product/details/${productmsite._id}?selectedPlatform=${selectedPlatform}`} className="leftAlignedLink"
//                                 title={productmsite.url}>
//                                     {productmsite.url.length > 30 ? productmsite.url.substring(0,30)+"...":productmsite.url}
//                                 </Link>
//                             </td>
//                             <td>{new Date(productmsite.timestamp_req*1000).toLocaleString()}</td>
//                             {/* <td>{new Date(productsite.timestamp_res*1000).toLocaleString()}</td> */}
//                             <td>{productmsite.response_code}</td>
//                             {/* <td>{productsite.response_code}</td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             )

//             }
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

// export default Productsite;
/////////-------------------------


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../navbar/Navbar';
// import './productsite.css';
// import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material';

// const Productsite = () => {
//     const [selectedPlatforms, setSelectedPlatforms] = useState([]);
//     const [productsites, setProductsites] = useState([]);
//     const [searchedProducts, setSearchedProducts] = useState([]);
//     const [selectedPlatform, setSelectedPlatform] = useState('');
//     const [uniqueTrackIds, setUniqueTrackIds] = useState([]);
//     const [query, setQuery] = useState('');

//     useEffect(() => {
//         const fetchPlatforms = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3005/api/inspect/getall/platform');
//                 const platforms = response.data.map(platform => ({ label: platform, value: platform }));
//                 setSelectedPlatforms(platforms);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchPlatforms();
//     }, []);

//     useEffect(()=>{
//         const fetchtrackids = async () => {
//             try{
//                 const res = await axios.get(`http://localhost:3005/api/product/getall/trackids/?platform=${selectedPlatform}`)
//                 const trackids1 = res.data.map(track_id => ({label: track_id,value: track_id}))
//                 const trackids2 = [{label:'ALL',value:'ALL'},...trackids1]
//                 setUniqueTrackIds(trackids2);
//             }catch(error){
//                 console.log(error);
//             }
//         };
//         fetchtrackids();
//     },[]);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (selectedPlatform) {
//                 try {
//                     const res = await axios.get(`http://localhost:3005/api/product/getall/users?platform=${selectedPlatform}`);
//                     setProductsites(res.data);

//                     // const uniqueIdsResponse = await axios.get(`http://localhost:3005/api/product/getall/trackids?platform=${selectedPlatform}`);
//                    // setUniqueTrackIds(uniqueIdsResponse.data);
//                 } catch (error) {
//                     console.error(error);
//                 }
//             }
//         };
//         fetchData();
//     }, [selectedPlatform]);

//     const handleSearch = async (query) => {
//         if (query === 'ALL') {
//             setSearchedProducts(productsites);
//         } else {
//             const filteredProduct = productsites.filter(productsite => productsite.trackid === query);
//             setSearchedProducts(filteredProduct);
//         }
//     }

//     return (
//         <div className="">
//             <Navbar />
//             <div className="blockedsiteTable">
//                 <div className="blockedsite_heading">
//                     <Autocomplete
//                         disablePortal
//                         id="combo-box-demo"
//                         options={selectedPlatforms}
//                         sx={{ width: 300 }}
//                         renderInput={(params) => <TextField {...params} label="Select Platform" />}
//                         onChange={(e, value) => {
//                             if (value) {
//                                 setSelectedPlatform(value.value);
//                                 setQuery('');
//                             } else {
//                                 setSelectedPlatform('');
//                             }
//                         }}
//                     />
//                     {selectedPlatform && (
//                         <Autocomplete
//                             disablePortal
//                             id="combo-box-demo"
//                             options={uniqueTrackIds}
//                             sx={{ width: 300 }}
//                             renderInput={(params) => <TextField {...params} label={`Select By ${selectedPlatform} Users`} />}
//                             value={query}
//                             onChange={(e, value) => {
//                                 setQuery(value);
//                                 handleSearch(value);
//                             }}
//                         />
//                     )}
//                 </div>
//                 {selectedPlatform && searchedProducts.length > 0 && (
//                     <table border={1} cellPadding={10} cellSpacing={0}>
//                         <thead>
//                             <tr>
//                                 <th>S.No.</th>
//                                 <th>Usr/Asin</th>
//                                 <th>Url</th>
//                                 <th>RequestTime</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {searchedProducts.map((productsite, index) => (
//                                 <tr key={productsite._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{productsite.trackid ?? 'N/A'}</td>
//                                     <td align="left">
//                                         <Link
//                                             to={`/product/details/${productsite._id}?selectedPlatform=${selectedPlatform}`}
//                                             className="leftAlignedLink"
//                                             title={productsite.url}
//                                         >
//                                             {productsite.url.length > 30 ? productsite.url.substring(0, 30) + "..." : productsite.url}
//                                         </Link>
//                                     </td>
//                                     <td>{new Date(productsite.timestamp_req * 1000).toLocaleString()}</td>
//                                     <td>{productsite.response_code}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Productsite;



/////----------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Navbar from '../navbar/Navbar';
// import './productsite.css';
// import { Link } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';
// import TextField from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material';
// import Button1 from '@mui/material/Button';

// const Productsite = () => {
//     const [query, setQuery] = useState('')
//     const [selectedPlatforms, setSelectedPlatforms] = useState([]);
//     const [productsites,setProductsites] = useState([]);
//     const [searchedProducts,setSearchedProducts] = useState([]);
//     const [selectedPlatform, setSelectedPlatform] = useState('');
//     const [selectedTrackId,setSelectedTrackId] = useState('');
//     const [uniqueTrackIds,setUniqueTrackIds] = useState([]);
    
//     const handleSearch = async (query) => {
//         if(query === 'ALL'){
//             setSearchedProducts(productsites);
//         }
//         else {
//             const filteredProduct = productsites.filter(productsite => productsite.trackid === query);
//             setSearchedProducts(filteredProduct);
//         }
//         // else{
//         //     //const filteredProduct = productsites.filter(productsite => productsite.trackid.includes(query));
//         //     const filteredProduct = productsites.filter(productsite => {
//         //         return productsite.trackid && productsite.trackid.includes(query);
//         //     })
//         //     setSearchedProducts(filteredProduct);
//         // }
//     }
//     useEffect( () => {
//         const fetchPlatforms = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3005/api/inspect/getall/platform');
//                 const platforms = response.data.map(platform => ({ label: platform, value: platform }));
//                 setSelectedPlatforms(platforms);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchPlatforms();
//     },[]);
//     useEffect(() => {
//         const fetchData = async () =>{
//             if(selectedPlatform){
//                 try{
//                 const res = await axios.get(`http://localhost:3005/api/product/getall/users?platform=${selectedPlatform}`)
//                 setProductsites(res.data)

//                 const trackids = await axios.get(`http://localhost:3005/api/product/getall/trackids/?platform=${selectedPlatform}`)
//                 setUniqueTrackIds(trackids.data);
//                 }
//                 catch (error) {
//                     console.error(error);
//                 }
//             }
//         };
//         fetchData();
//     },[selectedPlatform])

//     return (
//         <div className="">
//             <Navbar/>
//             <div className="blockedsiteTable">
//                 <div className="blockedsite_heading">
//                     <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                     options={selectedPlatforms}
//                     sx={{width:300}}
//                     renderInput={(params) => <TextField{...params} label="Select Platform" /> }
//                     onChange={(e,value) => {
//                         if(value){
//                             setSelectedPlatform(value.value);
//                             setSelectedTrackId('')
//                         }
//                         else{
//                             setSelectedPlatform('')
//                         }
//                     }}
//                     onInputChange={(e,newInputValue) => {
//                         setSelectedPlatform(newInputValue);
//                     }}
//                     />
//                     {selectedPlatform && (
//                         <Autocomplete 
//                         disablePortal
//                         id="combo-box-demo"
//                         //options={uniqueTrackIds.map((id) => ({label: id, value:id}))}
//                         //options={productsites.filter(productsite => productsite && productsite.trackid).map(user => ({ label: user.trackid, value: user.trackid }))}
//                         // options={productsites.map(user=>({label:user,value:user}))}
//                         //options={productsites.filter(productsite => productsite.trackid).map(productsite => ({ label: productsite.trackid, value: productsite.trackid }))}
//                         //options={['ALL',...uniqueTrackIds]}
//                         options={uniqueTrackIds.map(trackId => ({ label: trackId, value: trackId }))}
//                         sx={{width:300}}
//                         renderInput={(params) => <TextField{...params} label={` Select By ${selectedPlatform} Users`} />}
//                        // onChange={(e,value)=> setQuery(value.value)}
//                         onChange={(e,value)=>{
//                             if(value){
//                                 setQuery(value.value);
//                                 setSelectedTrackId(value.value);
//                             }
//                             else{
//                                 setSelectedTrackId('');
//                             }
//                         }}
//                         />
//                     )
//                     }
//                 </div>
//                 {selectedPlatform && searchedProducts.length>0 && (
//                     <table border={1} cellPadding={10} cellSpacing={0}>
//                         <thead>
//                             <tr>
//                                 <th>S.No.</th>
//                                 <th>Usr/Asin</th>
//                                 <th>Url</th>
//                                 <th>RequestTime</th>
//                                 <th>Status</th>
//                             </tr>
//                             <tbody>
//                                 {searchedProducts.map((productsite,index)=>(
//                                     <tr key={productsite._id}>
//                                         <td>{index+1}</td>
//                                         {/* <td>{productsite.trackid}</td> */}
//                                         <td>{productsite.trackid ?? 4343}</td> {/* Use a fallback value */}
//                                         <td align="left">
//                                         <Link
//                                             to={`/product/details/${productsite._id}?selectedPlatform=${selectedPlatform}`}
//                                             className="leftAlignedLink"
//                                             title={productsite.url}
//                                         >
//                                             {productsite.url.length > 30 ? productsite.url.substring(0, 30) + "..." : productsite.url}
//                                         </Link>
//                                         </td>
//                                         <td>{new Date(productsite.timestamp_req * 1000).toLocaleString()}</td>
//                                         <td>{productsite.response_code}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </thead>
                        
//                     </table>
//                 )}
//             </div>
//         </div>
//     )

    

// }

// export default Productsite;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import './productsite.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import ReactPaginate from 'react-paginate';
import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';

const Productsite = () => {
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [productsites, setProductsites] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [uniqueTrackIds, setUniqueTrackIds] = useState([]);
    const [query, setQuery] = useState('');

    const [pageNumber, setPageNumber] = useState(0);
    const ItemPerPage = 8;

    useEffect(() => {
        const fetchPlatforms = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/inspect/getall/platform');
                const platforms = response.data.map(platform => ({ label: platform, value: platform }));
                const platforms2 = [{label:'ANY',value:'ANY'},...platforms];
                setSelectedPlatforms(platforms2);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPlatforms();
    }, []);

    useEffect(() => {
        const fetchTrackIds = async () => {
            try {
                
                    const res = await axios.get(`http://localhost:3005/api/product/getall/trackids/?platform=${selectedPlatform}`);
                    const trackIds = res.data.map(trackId => ({ label: trackId.toString(), value: trackId.toString() }));
                    const allTrackIds = [{ label: 'ALL', value: 'ALL' }, ...trackIds];
                    setUniqueTrackIds(allTrackIds);
                }
            catch (error) {
                console.log(error);
            }
        };
        if (selectedPlatform) {
            fetchTrackIds();
        }
    }, [selectedPlatform]);
        const fetchData = async(pageNumber,pageSize) =>{
            if(selectedPlatform){
                try {
                    let res;
                    if(query === 'ALL'){
                        //res = await axios.get(`http://localhost:3005/api/product/getall/users?platform=${selectedPlatform}`);
                        res = await axios.get(`http://localhost:3005/api/product/getall/users?platform=${selectedPlatform}&page=${pageNumber}&pageSize=${pageSize}`);
                        setSearchedProducts(res.data);
                    } else {
                        //res = await axios.get(`http://localhost:3005/api/product/getall/users?platform=${selectedPlatform}&trackid=${query}`);
                        res = await axios.get(`http://localhost:3005/api/product/getall/users?platform=${selectedPlatform}&trackid=${query}&page=${pageNumber}&pageSize=${pageSize}`);
                        setSearchedProducts(res.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };
        useEffect(()=>{
            fetchData(pageNumber,ItemPerPage);
        },[selectedPlatform,query,productsites]);

        

    const changePage = ({selected}) => {
        const pageNumber = selected +1;
        fetchData(pageNumber,ItemPerPage);
        setPageNumber(selected);
    };

    const pageCount = Math.ceil(searchedProducts.length/ItemPerPage);
    const pageVisited = pageNumber * ItemPerPage;
    const displayItems = searchedProducts
                        .slice(pageVisited,pageVisited+ItemPerPage)
                        .map((productsite, index) => (
                            <tr key={productsite._id}>
                                <td>{index + (pageNumber)*ItemPerPage+1}</td>
                                <td>{productsite.trackid ?? 'N/A'}</td>
                                <td align="left">
                                    <Link
                                         to={`/product/details/${productsite._id}`}
                                        // to={`/product/details/${productsite._id}?selectedPlatform=${selectedPlatform}`}
                                        className="leftAlignedLink"
                                        title={productsite.url}
                                    >
                                        {productsite.url.length > 30 ? productsite.url.substring(0, 30) + "..." : productsite.url}
                                    </Link>
                                </td>
                                <td>{new Date(productsite.timestamp_req * 1000).toLocaleString()}</td>
                                <td>{productsite.response_code}</td>
                            </tr>
                        ));
                        
 
    return (
        <div >
            <ResponsiveAppBar />
            {/* <Navbar /> */}
            <div className="blockedsiteTable">
                <div className="blockedsite_heading">
                    <Autocomplete
                        disablePortal
                        id="platform-combo-box"
                        options={selectedPlatforms}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Select Platform" />}
                        onChange={(e, value) => {
                            if (value) {
                                setSelectedPlatform(value.value);
                                setQuery('');
                            } else {
                                setSelectedPlatform('');
                            }
                        }}
                    />
                    {selectedPlatform && (
                        <Autocomplete
                            disablePortal
                            id="trackid-combo-box"
                            options={uniqueTrackIds}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`Select By ${selectedPlatform} Users`} />}
                            value={query}
                            //getOptionLabel={(option) => option.label.toString()}
                            onChange={(e,value)=> setQuery(value.value)}
                            onInputChange={(e, newInputValue)=>{
                                setQuery(newInputValue)
                            }}
                        />
                    )}
                </div>
                {selectedPlatform && searchedProducts.length > 0 && (
                    <>
                    <table border={1} cellPadding={10} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Usr/Asin</th>
                                <th>Url</th>
                                <th>RequestTime</th>
                                <th>Status</th>
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
                activeClassName={'active'}/>
                </>

                )}
               
            </div>
        </div>
    );
}

export default Productsite;
