// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from "axios";
// import "../addInspectSites/addInspect.css"
// // import "../addBlockedSites/";
// import toast from 'react-hot-toast';
// import Navbar from '../navbar/Navbar';
// import { Autocomplete } from '@mui/material';
// import TextField from '@mui/material/TextField';


// const Edit = () => {

 
//  const inspectsites = {
//     url:"",
//     trackid:""
//  }

//  const {id} = useParams();
//  const navigate = useNavigate();
//  const [inspectsite, setInspectsite] = useState(inspectsites);

//  const inputChangeHandler = (e) =>{
//     const {name, value} = e.target;
//     //setBlockedsite(prevState => ({...prevState,[name]:value}));
//     setInspectsite({...inspectsite, [name]:value});
//     console.log(blockedsite);
//  }

//  useEffect(()=>{
//     axios.get(`http://localhost:3005/api/inspect/getOne/${id}`)
//     .then((response)=>{
//         setInspectsite(response.data)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//  },[id])


//  const submitForm = async(e)=>{
//     e.preventDefault();
//     try{
//         const response= await axios.put(`http://localhost:3005/api/inspect/update/${id}`,inspectsite);
//         toast.success(response.data.msg,{position:"top-right"});
//         navigate("/inspect");
//     }catch(error){
//         console.log(error);
//         toast.error("failed to update inspect site url",{position:"top-center"});
//     }
//  }
//  const trackby = [
//     { label: "user_id" },
//     { label: "product_id" }
//   ]
// const [trackId, setTrackId] = useState('');

//   return (
//     <div>
//     <Navbar/>
//     <div className='addBlockedsite'>
//         <Link to={"/inspect"}>Back</Link>
//         <h3>Update Inspect site </h3>
//         <form className='addBlockedsiteForm' onSubmit={submitForm}>
//             <div className="inputGroup">
//                 <label htmlFor="url">url</label>
//                 <input type="text" value={inspectsite.url} onChange={inputChangeHandler} id="url" name="url" autoComplete='off' placeholder='url address' />
//             </div>
//             <Autocomplete
//                 disablePortal
//                 options={trackby || []}
//                 onChange = {(event,value) =>{
//                     setTrackId(value);
//                 }}
//                 onInputChange={(event,newInputValue) => {
//                     inputHandler({target:{name:'trackid', value: newInputValue}})
//                 }}
//                 renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="track By"
//                       id="trackid"
//                       name="trackid"
//                       autoComplete="off"
//                       placeholder="Enter trackid"
//                     />
//                   )}
//                   sx={{ width: 350 }}
//             />
//             <div className="inputGroup">
//                 <button type="submit">UPDATE Inspect site</button>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Edit


import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addInspectSites/addInspect.css"
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const Edit = () => {
  const [inspectsite, setInspectsite] = useState({
    url: "",
    trackid: "" // Initialize trackid to an empty string
  });
  

  const { id } = useParams();
  const navigate = useNavigate();
  const { url, trackid } = inspectsite;
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInspectsite({ ...inspectsite, [name]: value });
  }

  useEffect(() => {
    axios.get(`http://localhost:3005/api/inspect/getOne/${id}`)
      .then((response) => {
        setInspectsite(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id])

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`http://localhost:3005/api/inspect/update/${id}`, inspectsite);
  //     toast.success(response.data.msg, { position: "top-right" });
  //     navigate("/inspect");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to update inspect site url", { position: "top-center" });
  //   }
  // }
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:3005/api/inspect/update',inspectsite)
    .then((response) =>{
      toast.success(response.data.msg,{position:"top-left"});
      navigate("/inspect")
    }).catch(error => console.log(error));
  }

  const trackby = [
    { label: "user_id" },
    { label: "product_id" }
  ]
  const [trackId, setTrackId] = useState('');

  return (
    <div>
      <Navbar />
      <div className='addBlockedsite'>
        <Link to={"/inspect"}>Back</Link>
        <h3>Update Inspect site</h3>
        <form className='addBlockedsiteForm' onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="url">url</label>
            <input type="text" value={inspectsite.url} onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='url address' />
          </div>
          <Autocomplete
            disablePortal
            options={trackby || []}
            value={inspectsite.trackid}
            onChange={(event, value) => {
              // Update trackid with the selected value if available, otherwise use an empty string
              setTrackId(value);
            }}
            onInputChange={(event, newInputValue) => {
              // Update trackid with the newInputValue from Autocomplete's input field
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
          <div className="inputGroup">
            <button type="submit">UPDATE Inspect site</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit;