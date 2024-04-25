import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addInspectSites/addInspect.css"
import Navbar from '../navbar/Navbar';
// import "../addBlockedSites/";
import toast from 'react-hot-toast';

const Editmodified = () => {
 const {id} = useParams();
 const navigate = useNavigate();
 const [url,setUrl] = useState('');
 const [numPairs,setNumPairs] = useState(1);
 const [keyValuePairs,setKeyValuePairs] = useState([{key:'',value:''}]);

 useEffect(()=>{
    axios.get(`http://localhost:3005/api/modified/getOne/${id}`)
    .then((response)=>{
        const{url,jsonData} = response.data;
        setUrl(url);
        setNumPairs(jsonData.length);
        setKeyValuePairs(jsonData);
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])
 
 const handleUrlChange = (e) =>{
    setUrl(e.target.value);
 }
 const handleNumPairsChange =(e)=>{
  const value = parseInt(e.target.value);
  if (!isNaN(value) && value >= 0) {
    setNumPairs(value);
    const newKeyValuePairs = [...keyValuePairs];
    while (newKeyValuePairs.length < value) {
      newKeyValuePairs.push({ key: '', value: '' });
    }
    setKeyValuePairs(newKeyValuePairs.slice(0, value));
  }
 }

 const handleKeyValuePairChange =(index,keyOrValue,value)=>{
    const newKeyValuePairs =[...keyValuePairs];
    newKeyValuePairs[index][keyOrValue]=value;
    setKeyValuePairs(newKeyValuePairs);
 };
 const addKeyValuePair =()=>{
    setKeyValuePairs([...keyValuePairs,{key:'',value:''}]);
    setNumPairs(numPairs+1);
 };
 const removeKeyValuePair =(index) =>{
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs.splice(index,1);
    setKeyValuePairs(newKeyValuePairs);
    setNumPairs(numPairs-1);
 };

 const submitForm = async(e)=>{
    e.preventDefault();
    const data ={
        url,
        jsonData:keyValuePairs,
    };
    await axios.put(`http://localhost:3005/api/modified/update/${id}`,data,{
    headers:{
        'Content-Type':'application/json',
    },
 })
 .then((response)=>{
    toast.success(response.data.msg,{position:'top-right'});
    navigate('/modified');
 }).catch((error) => console.log(error));
 }
  return (
    <div>
      <Navbar/>
    <div className='addModifiedsite'>
    <Link to={"/modified"}>Back</Link>
    <h3>Edit Modified Site</h3>
    <form className='addModifiedsiteForm' onSubmit={submitForm}>
      <div className="inputGroup">
        <label htmlFor="url">URL</label>
        <input type="text" value={url} onChange={handleUrlChange} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
      </div>
      <div className='inputGroup'>
        <label htmlFor='numPairs'>Number of Key-value Pairs</label>
        <input type='number' value={numPairs} onChange={handleNumPairsChange} id='numPairs' name='numPairs' min='1' />
      </div>
      {Array.from(Array(numPairs)).map((_, index) => (
        <div key={index}>
          <div className="inputGroup">
            <label htmlFor={`key-${index}`}>Key</label>
            <input type='text' value={keyValuePairs[index]?.key || ''} onChange={(e) => handleKeyValuePairChange(index, 'key', e.target.value)} id={`key-${index}`} autoComplete='off' placeholder='Enter Key' />
          </div>
          <div className="inputGroup">
            <label htmlFor={`value-${index}`}>Value</label>
            <input type='text' value={keyValuePairs[index]?.value || ''} onChange={(e) => handleKeyValuePairChange(index, 'value', e.target.value)} id={`value-${index}`} autoComplete='off' placeholder='Enter Value' />
            <button type='button' onClick={() => removeKeyValuePair(index)}>Remove</button>
          </div>
        </div>
      ))}
      
      <div className="inputGroup">
        <button type="submit" >Update Modified Site</button>
      </div>
    </form>
    </div>
  </div>
  )
};
export default Editmodified