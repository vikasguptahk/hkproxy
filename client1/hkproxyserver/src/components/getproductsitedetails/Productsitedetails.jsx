 
// import Navbar from '../navbar/Navbar';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useParams } from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import "./productsitedetails.css"

// const Productsitedetails = () => {
//   const { id } = useParams();
//   const [productsites, setProductsitesdetail] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3005/api/product/getOne/${id}`);
//         setProductsitesdetail(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//         toast.error('Error fetching data', { position: 'top-right' });
//       }
//     };

//     fetchData();
//   }, [id]);
  

//   if (!productsites) {
//     return <div>Loading ...........</div>;
//   }

//   return (
//     <div>
//       <Navbar/>
//     <div className='blockedsiteTable'>
//       <Link to={'/product'}>Back</Link>
//       <div className='blockedsite_heading'>
//         {/* <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspect sites</Link>
//       <Link to={"/product"} className='addButton' cellPadding="10px">Products</Link>
//       <Link to={'/blocked'} className='addButton' cellPadding="10px">Blocked sites</Link>
//       <Link to={"/modified"} className='addButton' cellPadding="10px">Modified Site</Link>
//          */}
//         <table border={1} cellPadding={10} cellSpacing={0}>
           
//         <tbody className='tablebody'>
//     {Object.entries(productsites).map(([key, value]) => {
//         if (key === 'responseStatusCode') {
//             return (
//                 <tr key={key} className='leftAlignedLink'>
//                     <td><strong>{key}</strong></td>
//                     <td>{value}</td>
//                 </tr>
//             );
//         } else {
//             const parts = JSON.stringify(value).slice(1, -1).split(',');
//             return (
//                 <tr key={key} className='leftAlignedLink'>
//                     <td><strong>{key}</strong></td>
//                     <td>
//                         <table>
//                             <tbody>
//                                 {parts.map((part, index) => (
                                  
//                                     <tr key={`${key}-${index}`}>
//                                         <td>{part.trim().replace(/\\+/g, ' ')}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </td>
//                 </tr>
//             );
//         }
//     })}
// </tbody>    
//         </table>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Productsitedetails;


import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';
import "./productsitedetails.css"
import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';

const Productsitedetails = () => {
  const { id } = useParams();
  // const location = useLocation();
 // const selectedPlatform = new URLSearchParams(location.search).get('selectedPlatform');
  //const meeshoUrl = new URLSearchParams(location.search).get('meeshoUrl');
  const [productsites, setProductsitesdetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching the data")
        // let response;
        // if (selectedPlatform === 'meesho') {
        //   console.log("fetching the meesho")
        //   response = await axios.get(`http://localhost:3005/api/productm/getOne/${id}`);
        // } else if (selectedPlatform === 'amazon') {
        //   response = await axios.get(`http://localhost:3005/api/product/getOne/${id}`);
        // }
        const response = await axios.get(`http://localhost:3005/api/product/getOne/${id}`)
        setProductsitesdetail(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        toast.error('Error fetching data', { position: 'top-right' });
      }
    };

    fetchData();
  }, [id
  //, selectedPlatform
]);


  // useEffect(() => {
  //   const fetchmeeshourl = async () => {
  //     try{
  //       console.log(meeshoUrl);
  //       let response1;
  //       if(meeshoUrl === 'meeshoUrl'){
  //         response1 = await axios.get(`http://localhost:3005/api/productm/getall/urls`);
  //         setProductsitesdetail(response1.data);
  //       }

  //     }
  //     catch(error){
  //       console.error('Error fetching data: ', error);
  //       toast.error('Error in fetching data',{position: 'top-right'});
  //     }
  //   }
  //   fetchmeeshourl();
  // },[]);

  if (!productsites) {
        return <div>Loading ...........</div>;
      }
     
      return (
        <div>
          <ResponsiveAppBar/>
          {/* <Navbar/> */}
        <div className='blockedsiteTable'>
          <Link to={'/product'}>Back</Link>
          <div className='blockedsite_heading'>
             
            <table border={1} cellPadding={10} cellSpacing={0}>
               
            <tbody className='tablebody'>
        {Object.entries(productsites).map(([key, value]) => {
            if (key === 'responseStatusCode') {
                return (
                    <tr key={key} className='leftAlignedLink'>
                        <td><strong>{key}</strong></td>
                        <td>{value}</td>
                    </tr>
                );
            } else {
                const parts = JSON.stringify(value).slice(1, -1).split(',');
                return (
                    <tr key={key} className='leftAlignedLink'>
                        <td><strong>{key}</strong></td>
                        <td>
                            <table>
                                <tbody>
                                    {parts.map((part, index) => (
                                      
                                        <tr key={`${key}-${index}`}>
                                            <td>{part.trim().replace(/\\+/g, ' ').substring(0,100)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                );
            }
        })}
    </tbody>    
            </table>
          </div>
          </div>
        </div>
      );
    };
    
    export default Productsitedetails;
 




// useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response;
  //       if (selectedPlateform === 'meesho') {
  //         response = await axios.get(`http://localhost:3005/api/productm/getOne/${id}`);
  //       } else if (selectedPlateform === 'amazon') {
  //         response = await axios.get(`http://localhost:3005/api/product/getOne/${id}`);
  //       }
  //      // console.log('Response:', response); 
  //       // if (!response || !response.data) {
  //       //   console.log('vikas')
  //       //   throw new Error('Empty response or missing data');
  //       // }
         
  //       setProductsitesdetail(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data: ', error);
  //       toast.error('Error fetching data', { position: 'top-right' });
  //     }
  //   };

  //   fetchData();
  // }, [id, selectedPlateform]);
