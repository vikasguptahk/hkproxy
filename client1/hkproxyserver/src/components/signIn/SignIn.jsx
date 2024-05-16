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
import ResponsiveAppBar from '../responsiveappbar/ ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import axios from 'axios';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useUser } from '../../UserContext';

//import { GoogleOAuthProvider } from '@react-oauth/google';

//import { useGoogleLogin } from '@react-oauth/google';

const defaultTheme = createTheme(); 
const SignIn = () => {
    const {setUsername} = useUser();
    const {username} = useUser();
    // const login = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    //   });
      
    const [showPassword,setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show)=> !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    
    const navigate = useNavigate();

    const handleSubmit = async(event) =>{

        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email =  data.get('email');
        const password = data.get('password');
        try{
            const response = await axios.get(`http://localhost:3005/api/users/getuser/${email}`)
            const userData = response.data;
            if(userData && userData.password === password){
                toast.success(response.data.msg,{position:'top-center'});
                ////
                localStorage.setItem('username',email);
                ////
                setUsername(email);
                console.log("username set to currently loggedin user: "+username)
                navigate(`/blocked`)
            }
            else{
                toast.success("Check username/password",{position:'top-center'});
            }
        }catch(error){
            console.error('Error',error);
        }
    };

    return(
        //<GoogleOAuthProvider clientId="341353009605-3p5d7r4hvboaoquumshpsvj0fb7e32ek.apps.googleusercontent.com">
        <div>
        {/* <ResponsiveAppBar/> */}
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box 
                   sx={{
                    marginTop:8,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                   }}>
                    <Avatar sx ={{m:1,bgcolor:'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text':'password'}
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment:(
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOffIcon/>:<VisibilityIcon />}
                                    </IconButton>
                            )
                        }}
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>
                            Sign In
                        </Button>
                        <GoogleButton align='center' 
                        onClick={()=>{console.log('clicked google Button')}} 
                        //onClick={() => login()}
                        />
                        <Grid Container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" align="center"  >
                {'Copyright © '}
                <Link color="inherit" href="#">
                    HkProxy
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
                </Typography>
            </Container>
        </ThemeProvider>
        </div>
        //</GoogleOAuthProvider>
    )

}
export default SignIn