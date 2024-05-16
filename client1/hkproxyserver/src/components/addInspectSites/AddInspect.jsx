// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";
// import "./addInspect.css";
// import toast from 'react-hot-toast';
// import Navbar from '../navbar/Navbar';
// import TextField from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material';
// const AddInspect = () => {
//   const inspectsites= {
//     url:"",
//     trackid:"",
//   }
//   const [inspectsite,setInspectsite] = useState(inspectsites)
//   const navigate = useNavigate();

//   const [url,setUrl] = useState('');
//   const [trackid,setTrackId] = useState('');


//   // const inputHandler = (e) =>{
//   //     const {name, value} = e.target;
//   //     setInspectsite({...inspectsite, [name]:value});
//   // }

//   const inputHandler = (e) => {
//     const {name, value} = e.target;
//     if(name === 'url'){
//       setUrl(value);
//     }
//     else if(name === 'trackid'){
//       setTrackId(value);
//     }
//   }
//   const submitForm = async(e) =>{
//     e.preventDefault();
//     const inspectsite = { url, trackid }; 
//     await axios.post("http://localhost:3005/api/inspect/create", inspectsite)
//     .then((response)=>{
//        toast.success(response.data.msg, {position:"top-right"})
//        navigate("/inspect")
//     })
//     .catch(error => console.log(error))
//   }
//  const trackby = [
//   {label:"user_id"},
//   {label:"product_id"}
//  ]

//   return (
//     <div>
//       <Navbar/>
//     <div className='addInspectsite'>
//         <Link to={"/inspect"}>Back</Link>
//         <h3>Add sites to inspect</h3>
//         <form className='addInspectsiteForm' onSubmit={submitForm}>
//             <div 
//             className="inputGroup"
//             >
//                 <label htmlFor="url">url</label>
//                 <input type="text" onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
//             </div>
//             <div  >
//             <Autocomplete
//                       disablePortal
//                       id="combo-box-demo"
//                       options={trackby || []} // Ensure options is an array or initialize as empty array
//                       onChange={(event, value) => {
//                         // Call your inputHandler here with the value
//                         setTrackId(value);
//                       }}
//                       onInputChange={(event, newInputValue) => {
//                         // Pass the event object to inputHandler
//                         inputHandler(event);
//                       }}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           label="track By"
//                           id="trackid"
//                           name="trackid"
//                           autoComplete="off"
//                           placeholder="Enter trackid"
//                         />
//                       )}
//                       sx={{ width: 350 }}
//                     />
//             </div>
//             {/* <div className="inputGroup">
                 
//                 <input type="text" onChange={inputHandler} id="trackid" name="trackid" autoComplete='off' placeholder='Enter trackid' />
//             </div> */}
             
//             <div className="inputGroup">
//                 <button type="submit">ADD Inspect site URl</button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default AddInspect

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./addInspect.css";
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';

const AddInspect = () => {
  const [inspectsite, setInspectsite] = useState({
    url: "",
    trackid: "",
  });
  const navigate = useNavigate();


  const { url, trackid } = inspectsite;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInspectsite({ ...inspectsite, [name]: value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3005/api/inspect/create", inspectsite)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/inspect");
      })
      .catch(error => console.log(error))
  }

  const trackby = [
    { label: "user_id" },
    { label: "product_id" }
  ]
const [trackId, setTrackId] = useState('');
  return (
    <div>
      <Navbar />
      <div className='addInspectsite'>
        <Link to={"/inspect"}>Back</Link>
        <h3>Add sites to inspect</h3>
        <form className='addInspectsiteForm' onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="url">url</label>
            <input type="text" value={url} onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
          </div>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={trackby || []} // Ensure options is an array or initialize as empty array
              onChange={(event, value) => {
                // Call your inputHandler here with the value
                setTrackId(value);
              }}
              onInputChange={(event, newInputValue) => {
                // Pass the newInputValue to inputHandler
                inputHandler({ target: { name: 'trackid', value: newInputValue } });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="track By"
                  id="trackid"
                  name="trackid"
                  autoComplete="off"
                  placeholder="Enter trackid"
                />
              )}
              sx={{ width: 350 }}
            />
          </div>
          <div className="inputGroup">
            <button type="submit">ADD Inspect site URl</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddInspect;
