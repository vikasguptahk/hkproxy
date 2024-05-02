/*

import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./inspectsitedetails.css"
import { useParams } from 'react-router-dom';
 
import { Link, useMatch } from 'react-router-dom'

const Inspectsitedetails = () => {
    const {id} = useParams();
    
  const [inspectsites, setInspectsitesdetail] = useState(null);

  useEffect(()=>{

    const fetchData = async()=>{
        try{
        const response = await axios.get(`http://localhost:3005/api/inspect/getOne/${id}`);
        setInspectsitesdetail(response.data);
        }catch(error){
            console.error('Error fethcing data: ',error)
            toast.success("error in fetching data", {position: 'top-right'})
        }
    }

    fetchData();

  },[id]);
  if(!inspectsites){
    return <div>Loading ...........</div>
  }

  return (
    <div className='blockedsiteTable'>
        <div className='blockedsite_heading'>
        Inspect site details
        <Link to={"/inspect/add"} className='addButton' cellPadding="10px">Add Inspected Site</Link>
        <Link to={"/inspect"} className='addButton'>Inspect Site</Link>
         
        <table border={1} cellPadding={10} cellSpacing={0} >
            <thead>
                <tr>
                    
                    <th>Url</th>
                    <th>Request headers</th>
                    <th>Request Payloads</th>
                    <th>Request Type</th>
                    <th>Request Params</th>
                    <th>Response Body</th>
                    <th>Response Headers</th>
                    <th>Response Status</th>
                </tr>
                
            </thead>
            <tbody>
                        <tr key={inspectsites._id}>
                            <td>{inspectsites.url}</td>
                            <td>{inspectsites.requestHeaders}</td>
                            <td>{inspectsites.requestPayloads}</td>
                            <td>{inspectsites.requestType}</td>
                            <td>{inspectsites.requestParams}</td>
                            <td>{inspectsites.responseBody}</td>
                            <td>{inspectsites.responseStatusCode}</td>
                        </tr>   
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Inspectsitedetails

*/
import Navbar from '../navbar/Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./inspectsitedetails.css"

const Inspectsitedetails = () => {
  const { id } = useParams();
  const [inspectsites, setInspectsitesdetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/inspect/getOne/${id}`);
        setInspectsitesdetail(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        toast.error('Error fetching data', { position: 'top-right' });
      }
    };

    fetchData();
  }, [id]);

  if (!inspectsites) {
    return <div>Loading ...........</div>;
  }

  return (
    <div>
      <Navbar/>
    <div className='blockedsiteTable'>
      <Link to={'/inspect'}>Back</Link>
      <div className='blockedsite_heading'>
      {/* <Link to={"/inspect"} className='addButton' cellPadding="10px">Inspected Sites</Link>
      <Link to={'/blocked'} className='addButton' cellPadding="10px">Blocked sites</Link>
      <Link to={"/modified"} className='addButton' cellPadding="10px">Modified Site</Link> */}
        
        <table border={1} cellPadding={10} cellSpacing={0}>
           
        <tbody className='tablebody'>
    {Object.entries(inspectsites).map(([key, value]) => {
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

export default Inspectsitedetails;
