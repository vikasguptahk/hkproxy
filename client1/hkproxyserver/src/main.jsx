import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from "react-hot-toast"
import App from './App.jsx'
import './index.css'

//import {GoogleOAuthoProvider} from '@react-oauth/google;'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthoProvider clientId="341353009605-3p5d7r4hvboaoquumshpsvj0fb7e32ek.apps.googleusercontent.com"> */}
    <App/>
    <Toaster/>
    {/* </GoogleOAuthoProvider>; */}
  </React.StrictMode>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';
// import { Toaster } from 'react-hot-toast';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <Auth0Provider
//   domain="dev-cj3pt7ayusjenrew.us.auth0.com"
//     clientId="bObaYfRhmrAcgibnsvavr08OjmT7mxaC"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}>
//     <App/>
//     <Toaster/>
//   </Auth0Provider>
// );