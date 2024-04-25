import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
const Modifiedsitedetails = () => {
  const { id } = useParams();
  const [modifiedsites, setModifiedsitesdetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/modified/getOne/${id}`);
        setModifiedsitesdetail(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        toast.error('Error fetching data', { position: 'top-right' });
      }
    };

    fetchData();
  }, [id]);

  if (!modifiedsites) {
    return <div>Loading ...........</div>;
  }

  return (
    <div>
      <Navbar/>
    <div className='blockedsiteTable'>
      <Link to={'/modified'}>Back</Link>
      <div className='blockedsite_heading'>
      <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspected Sites</Link>
      <Link to={'/blocked'} className='addButton' cellPadding="10px">Blocked sites</Link>
      <Link to={"/modified"} className='addButton' cellPadding="10px">Modified Site</Link>
        
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
             <tr></tr>
          </thead>
          <tbody>
            {Object.entries(modifiedsites).map(([key,value])=>(
            <tr key={key}>
              <td>{JSON.stringify(value)}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Modifiedsitedetails;
