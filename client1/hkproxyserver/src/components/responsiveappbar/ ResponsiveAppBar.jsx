import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useUser } from '../../UserContext';
import "./appbar.css";
  
 
const pages = [
  {name:'BlockedSite',link:'/blocked'}, 
  {name:'InspectedSite',link:'/inspect'}, 
  {name:'ModifiedSite',link:'/modified'},
  {name:'Products',link:'/product'},];

const settings = [
  {name:'Profile',link:'/'},
  {name:'Dashboard',link:'/'},
  {name:'Logout',link:'/'},
]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(localStorage.getItem('username')||null);
  const location = useLocation();
  const navigate = useNavigate();
  const {username} = useUser();
  const {setUsername} = useUser();
  const imagpath1 = `/home/vikas.gupta1@Brightlifecare.local/Pictures/hkProxyServer/client1/hkproxyserver/src/Profilephotes/${localStorage.getItem('username')}_image.jpg`;

 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleLogout = () => {
  //   handleCloseUserMenu();
  //   console.log("beforelogout: "+username)
  //   setUsername(null);
  //   console.log("after: logout"+username)
  //   navigate('/signin');
  // }
  const handleLogout = ()=>{
    handleCloseNavMenu();
    console.log("username: before login:"+username);
    localStorage.removeItem('username');
    setUsername(null);
    if(username){
      console.log("getting error in setting the username: "+username);
    }
     
    console.log("username: after logout:"+username);
    navigate('/signin')

  };

  // React.useEffect(() => {
  //   const storedUsername = localStorage.getItem('username');
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, []);
  
  React.useEffect(()=>{
    const storedusername = localStorage.getItem('username');
    console.log("username stored: "+storedusername);
    if(storedusername){
       setUsername(storedusername);
       console.log("username taken from cookies: "+ username);
    }
    else{
      console.log("username on refresh:"+username)
    if(!username){
      console.log('username:'+username);
      navigate('/signin');
    }
  }
  },[username,navigate]);

  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    const imageUrl=URL.createObjectURL(file);
    setSelectedFile(imagpath1)
    localStorage.setItem('profilePicture',imageUrl);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      const base64Image = reader.result.split(',')[1];
      setSelectedFile(imagpath1);
      localStorage.setItem('profilePicture',base64Image);
      console.log('username is '+ username)
      axios.put(`http://localhost:3005/api/users/update3/${
        //  username
        localStorage.getItem('username')
      }`,{profileImage:base64Image})
      .then(response => {
        console.log('profile Image updated successfully',response.data);
      }).catch(error => {
        console.error('Error in updating Profile Image: ',error);
      });

    }
    // // const formData = new FormData();
    // // formData.append('profilePicture',file);
    // console.log('username:'+username);
    // axios.put(`http://localhost:3005/api/users/update2/${username}`,{profileImage:imageUrl})
    // .then(response =>{
    //   console.log('profile picture updated successfully',response.data);
    // })
  }

   
  return (
    <AppBar position="fixed" sx={{bgcolor: 'red'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1  }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 60,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'white',
              
              textDecoration: 'none',
            }}
          >
            HKPROXYSERVER
          </Typography>
          {/* <Box>
            <Avatar alt="Profile Picture" src={selectedFile || '/static/images/avatar/1.jpg'}/>
          </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
              
            >
              
              <MenuIcon  bgcolor="green" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'white', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography 
                  component={Link}
                  to={page.link}
                  color='yellow'
                  
                  sx={{textDecoration:'none'}}
                  textAlign="center">
                    {page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'yellow',
              textDecoration: 'none',
            }}
          >
            HKPROXYSERVER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
              <Button
                key={page.name}
                component={Link}
                to={page.link}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 1,
                  bgcolor: location.pathname === page.link ? 'black' : 'white',
                  display: 'block', }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 , color:'white'}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Picture" src={selectedFile || '/static/images/avatar/1.jpg'} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={setting.name === "Logout" ? handleLogout: handleCloseNavMenu}>
                  <Typography 
                  textAlign="center"
                  sx={{cursor: setting.name === 'Logout' ? 'pointer':'auto'}}
                  >{setting.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <input 
                  accept='image/*'
                  id ="contained-button-file"
                  multiple
                  type='file'
                  style={{display:'none'}}
                  onChange={handleFileChange}
                  />
                  <label htmlFor='contained-button-file'>
                    <Typography component="span">Upload Photo</Typography>
                  </label>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;