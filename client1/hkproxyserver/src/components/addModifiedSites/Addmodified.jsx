import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./addmodified.css";
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';

const AddModified = () => {
  const [url,setUrl] = useState('');
  const [numPairs,setNumPairs] = useState(1);
  const [keyValuePairs, setKeyValuePairs] = useState([{key:'',value:''}]);
  const navigate = useNavigate();
  const handleUrlChange =(e)=>{
    setUrl(e.target.value);
  };

  const handleNumPairsChange = (e) => {
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
  
  const handleKeyValuePairChange = (index, keyOrValue, value) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index][keyOrValue] = value;
    setKeyValuePairs(newKeyValuePairs);
  }


  const addKeyValuePair=()=>{
    setKeyValuePairs([...keyValuePairs,{key:'',value:''}]);
  };
  const removeKeyValuePair = (index)=>{
    const newKeyValuePairs =[...keyValuePairs];
    newKeyValuePairs.splice(index,1);
    setKeyValuePairs(newKeyValuePairs);
    setNumPairs((prevNumPairs)=>prevNumPairs-1);
  };
  /*
  const submitForm = async(e) =>{
    e.preventDefault();
const data = {
  id: "661bb92fdfb495cbf6d39f3e",
  url: "example.com",
  jsonData: [
    { key: "keybm1", value: "vamue1" },
    { key: "keymb2", value: "valubne2" }
  ]
};

axios.post('http://localhost:3005/api/modified/create', data)
  .then((response) => {
    // Handle successful response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });

};
  
*/
  const submitForm = async(e) =>{
    e.preventDefault();
    const data={
      url,
      jsonData: keyValuePairs,
    
  };

  await axios.post('http://localhost:3005/api/modified/create',data,{
  headers: {
    'Content-Type': 'application/json',
  },})
  .then((response)=>{
    toast.success(response.data.msg,{position:'top-right'});
    navigate('/modified');
  }).catch((error) => console.log(error));

};

  return (
    <div>
      <Navbar/>
    <div className='addModifiedsite'>
        <Link to={"/modified"}>Back</Link>
        <h3>Add new Modified sites</h3>
        <form className='addModifiedsiteForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" onChange={handleUrlChange} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
            </div>
             <div className='inputGroup'>
              <label htmlFor='numPairs'>number of Key-value Pairs</label>
              <input type='number' value={numPairs} onChange={handleNumPairsChange} id='numPairs' name='numPairs' min='0' />
             </div>
             {Array.from(Array(numPairs)).map((_, index)=>(
              <div key={index}>
                <div className="inputGroup">
                  <label htmlFor={`key-${index}`}>Key</label>
                  <input type='text' value={keyValuePairs[index]?.key || ''} onChange={(e)=>handleKeyValuePairChange(index,'key',e.target.value)} id={`key-${index}`} autoComplete='off' placeholder='Enter Key' />
                </div>
                <div className="inputGroup">
                  <label htmlFor={`value-${index}`}>Value</label>
                  <input type='text' value={keyValuePairs[index]?.value || ''} onChange={(e)=>handleKeyValuePairChange(index,'value',e.target.value)} id={`value-${index}`} autoComplete='off' placeholder='Enter value' />
                  <button type='button' onClick={()=>removeKeyValuePair(index)}>Remove</button>
                </div>
              </div>
             ))}
             
            <div className="inputGroup">
                <button type="submit"  >ADD Modified  site URl with data</button>
            </div>
        </form>
        </div>
    </div>
  );
}
export default AddModified