// // //import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';
// // import { useNavigate } from 'react-router-dom';
// // import GoogleButton from 'react-google-button';
// // import axios from 'axios';
// // //import MuiPhoneNumber from 'material-ui-phone-number';
// // import React, {useState} from 'react';

// // const defaultTheme = createTheme();
// // const SignUp = () => {
// //   const users ={
// //     name:"",
// //     username:"",
// //     password:"",
// //     phonenumber:"",

// //   }
// //   const [user,setUser] = useState(users);
// //   const inputHandler = (e)  => {
// //     const {name, value} = e.target;
// //     setUser({...user,[name]:value});
// //   }
// //     const navigate = useNavigate();
// //     const handleSubmit = async(event) =>{
// //         event.preventDefault();
// //         //const data = new FormData(event.currentTarget);
// //         // console.log({
// //         //     email: data.get('email'),
// //         //     password:data.get('password'),
// //         // });
// //         await axios.post("http://localhost:3005/api/users/create",user)
// //         .then((response) => {
// //           toast.success(response.data.msg,{position:"top-center"})
// //           navigate("/product")
// //         })
// //         .catch(error => console.log(error))

// //         navigate('/signin');
// //     };

// //     return(
// //         <div>
// //         {/* <ResponsiveAppBar/> */}
// //         <ThemeProvider theme={defaultTheme}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //             <LockOutlinedIcon />
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
// //             Sign up
// //           </Typography>
// //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
// //             <Grid container spacing={2}>
               
// //               <Grid item xs={12} sm={6}>
// //                   <TextField
// //                     autoComplete="given-name"
// //                     name="name"
// //                     required
// //                     fullWidth
// //                     id="firstName"
// //                     label="First Name"
// //                     autoFocus
// //                     onChange={inputHandler}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12} sm={6}>
// //                   <TextField
// //                     required
// //                     fullWidth
// //                     id="lastName"
// //                     label="Last Name"
// //                     name="lastName"
// //                     autoComplete="family-name"
// //                     onChange={inputHandler}
// //                   />
// //                 </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                   onClick={inputHandler}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                 required
// //                 fullWidth
// //                 id="phonenumber"
// //                 label = "Phone Number"
// //                 name ="phonenumber"
// //                 autoComplete="phonenumber"
// //                 onChange={inputHandler}
// //                 />
// //                  {/* <MuiPhoneNumber
// //                     required
// //                     fullWidth
// //                     id="phoneNumber"
// //                     label="Phone Number"
// //                     name="phoneNumber"
// //                     defaultCountry="IN"
// //                 /> */}
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   type="password"
// //                   id="password"
// //                   autoComplete="new-password"
// //                   onChange={inputHandler}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <FormControlLabel
// //                   control={<Checkbox value="allowExtraEmails" color="primary" />}
// //                   label="I want to receive inspiration, marketing promotions and updates via email."
// //                 />
// //               </Grid>
// //             </Grid>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               sx={{ mt: 3, mb: 2 }}
              
// //             >
// //               Sign Up
// //             </Button>
// //             <GoogleButton align='center' 
// //                         onClick={()=>{console.log('clicked google Button')}} 
// //                         //onClick={() => login()}
// //                         />
// //             <Grid container justifyContent="flex-end">
// //               <Grid item>
// //                 <Link href="/signin" variant="body2">
// //                   Already have an account? Sign in
// //                 </Link>
// //               </Grid>
// //             </Grid>
// //           </Box>
// //         </Box>
// //         <Typography variant="body2" color="text.secondary" align="center"  >
// //                 {'Copyright © '}
// //                 <Link color="inherit" href="#">
// //                     HkProxy
// //                 </Link>{' '}
// //                 {new Date().getFullYear()}
// //                 {'.'}
// //                 </Typography>
// //       </Container>
// //     </ThemeProvider>
// //         </div>
// //     )

// // }
// // export default SignUp

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import GoogleButton from 'react-google-button';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const defaultTheme = createTheme();

// const SignUp = () => {
//   const [user, setUser] = React.useState({
//     name: '',
//     username: '',
//     phonenumber: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     // setUser((prevUser) => ({
//     //   ...prevUser,
//     //   [name]: value,
//     // }));
//     setUser({...user,[name]:value});
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//       await axios.post("http://localhost:3005/api/users/create", user)
//       .then((response)=>{
//         toast.success(response.data.msg,{position:"top-right"})
//         navigate('/product')
//       })
//       .catch(error => console.log(error))
    
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   onChange={inputHandler}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="name"
//                   autoComplete="family-name"
//                   onChange={inputHandler}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="username"
//                   autoComplete="email"
//                   onChange={inputHandler}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="phonenumber"
//                   label="Phone Number"
//                   name="phonenumber"
//                   autoComplete="tel"
//                   onChange={inputHandler}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   onChange={inputHandler}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <GoogleButton
//               align='center'
//               onClick={() => { console.log('clicked google Button') }}
//             />
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/signin" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default SignUp;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleButton from 'react-google-button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useAuth0 } from "@auth0/auth0-react";
const defaultTheme = createTheme();

const SignUp = () => {

  const {loginWithRedirect} = useAuth0();

  const [user, setUser] = React.useState({
    name: '',
    username: '',
    phonenumber: '',
    password: '',
  });

  const [showPassword,setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show)=>!show);
  const handleMouseDownPassword = (event) =>{
    event.preventDefault();
  }

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Combine first name and last name
    const { name, lastName, ...userData } = user;
    const fullName = `${name} ${lastName}`;
    try {
      const response = await axios.post("http://localhost:3005/api/users/create", { ...userData, name: fullName });
      toast.success(response.data.msg, { position: "top-right" });
      navigate('/signin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone Number"
                  name="phonenumber"
                  autoComplete="tel"
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text':'password'}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment:(
                      <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOffIcon/>:<VisibilityIcon/>}
                      </IconButton>
                    )
                  }}
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <GoogleButton
              align='center'
              onClick={() => { console.log('clicked google Button') }}
            />
            {/* <button onClick={()=> loginWithRedirect()}>Log in</button> */}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
