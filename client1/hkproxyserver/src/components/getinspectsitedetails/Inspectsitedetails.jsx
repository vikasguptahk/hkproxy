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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

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
    <div className='blockedsiteTable'>
      <div className='blockedsite_heading'>
        
        Inspect site details
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
             <tr></tr>
          </thead>
          <tbody>
            {Object.entries(inspectsites).map(([key,value])=>(
            <tr key={key}>
              <td>{JSON.stringify(value)}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inspectsitedetails;
