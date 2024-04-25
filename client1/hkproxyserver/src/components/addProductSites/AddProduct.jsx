import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./addProduct.css";
import toast from 'react-hot-toast';
import Navbar from '../navbar/Navbar';
const AddProduct = () => {
  const productsites= {
    url:"",
  }
  const [productsite,setProductsite] = useState(productsites)
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setProductsite({...productsite, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:3005/api/product/create", productsite)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/product")
    })
    .catch(error => console.log(error))
  }


  return (
    <div>
      <Navbar/>
    <div className='addProductsite'>
        <Link to={"/product"}>Back</Link>
        <h3>Add product</h3>
        <form className='addProductsiteForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor='asin'>asin</label>
                <input type='text' onChange={inputHandler} id="asin" name="asin" autoComplete='off' placeholder='Enter asin'/>
            </div>
            <div className="inputGroup">
                <label htmlFor="url">url</label>
                <input type="text" onChange={inputHandler} id="url" name="url" autoComplete='off' placeholder='Enter Url or host name' />
            </div>
            <div>
                <label htmlFor='date'>date</label>
                <input type="date" onChage={inputHandler} id="date" name="date" autoComplete='off' placeholder='enter date'/>
            </div>
             
            <div className="inputGroup">
                <button type="submit">ADD Product site URl</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddProduct