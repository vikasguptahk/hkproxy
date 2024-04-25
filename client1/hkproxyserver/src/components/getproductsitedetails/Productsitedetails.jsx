 
import Navbar from '../navbar/Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./productsitedetails.css"

const Productsitedetails = () => {
  const { id } = useParams();
  const [productsites, setProductsitesdetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/product/getOne/${id}`);
        setProductsitesdetail(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        toast.error('Error fetching data', { position: 'top-right' });
      }
    };

    fetchData();
  }, [id]);

  if (!productsites) {
    return <div>Loading ...........</div>;
  }

  return (
    <div>
      <Navbar/>
    <div className='blockedsiteTable'>
      <Link to={'/product'}>Back</Link>
      <div className='blockedsite_heading'>
        <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspect sites</Link>
      <Link to={"/product"} className='addButton' cellPadding="10px">Products</Link>
      <Link to={'/blocked'} className='addButton' cellPadding="10px">Blocked sites</Link>
      <Link to={"/modified"} className='addButton' cellPadding="10px">Modified Site</Link>
        
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
                                        <td>{part.trim().replace(/\\+/g, ' ')}</td>
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
