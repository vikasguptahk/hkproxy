 import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
 import { Routes } from "react-router-dom"
 import { Route } from "react-router-dom"
 
import Url from './components/sites/Sites'
import Blocked from './components/getblockedsite/Blockedsite'
import Add from './components/addBlockedSites/Add'
import BlockedEdit from './components/updateblockedsite/Edit'
import Inspectadd from "./components/addInspectSites/AddInspect"
import Inspect from "./components/getinspectsite/Inspectsite"
import Inspectdetails from "./components/getinspectsitedetails/Inspectsitedetails"
import Edit from "./components/updateinspectsite/Edit"
import AddModified from "./components/addModifiedSites/Addmodified"
import ModifiedDetails from "./components/getmodifiedsitedetails/Modifiedsitedetails"
import Modified  from "./components/getmodifiedsite/Modifiedsite"
import ModifiedEdit from "./components/updatemodifiedsite/Editmodified"
import Product from "./components/getproductsite/Productsite"
 import Navbar from "./components/navbar/Navbar"
import SearchProduct from "./components/searchProduct/Searchproduct"
import Productdetail from "./components/getproductsitedetails/Productsitedetails"
import SignIn from "./components/signIn/SignIn"
import SignUp from "./components/signup/SignUp"
import { useState } from "react"
import ResponsiveAppBar from "./components/responsiveappbar/ ResponsiveAppBar"
import { UserProvider } from "./UserContext"

 

function App(){
  const route = createBrowserRouter([
    // {
    //   path:"/",
    //   element:<Url/>
    // },
    
    {
      path:"/signin",
      element:<SignIn/>
    },
    {path:"/",
      element:<SignUp/>
    },
    {
      path:"/blocked",
      element:<Blocked/>
    },
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/inspect",
      element:<Inspect/>

    },
    {
      path:"/inspect/add",
      element:<Inspectadd/>
    },
    {
      path:"blocked/edit/:id",
      element:<BlockedEdit/>,
    },
    {
      path:"/modified/add",
      element:<AddModified/>
    },
    {
      path:"/inspect/details/:id",
      element:<Inspectdetails/>
    },
    {
      path:"/modified",
      element:<Modified/>
    },
    {
      path:"/modified/details/:id",
      element:<ModifiedDetails/>
    },
    {
      path:"/modified/edit/:id",
      element:<ModifiedEdit/>
    },
    {
      path:"/inspect/edit/:id",
      element:<Edit/>
    },
    {
      path:"/product",
      element:<Product/>
    },
    {
      path:"product/searchproduct",
      element:<SearchProduct/>
    },
    {
      path:"product/details/:id",
      element:<Productdetail/>
    },
    
   
  ])

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleLogin=()=>{
    setIsLoggedIn(true);
  }
  const handleLogout=()=>{
    setIsLoggedIn(false);
  };

  return(
    <div className="App">
      <UserProvider>
      <RouterProvider router={route}></RouterProvider>
      </UserProvider>
      
    </div>
    // <div className="App">
    //   <RouterProvider router={route}>
        
    //       <ResponsiveAppBar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
    //       <Routes>
    //         <Route path="/" element={isLoggedIn?(<Navigate to ="/product"/>):(
    //           <>
    //           <SignIn onLogin={handleLogin}/>
    //           <SignUp/>
    //           </>
    //         )}
    //         />
    //         <Route path="/product" element={isLoggedIn ? <Product/>:<Navigate to="/signin"/>}
    //         />
    //       </Routes>
        
    //   </RouterProvider>
    // </div>
  );
}

export default App;

 