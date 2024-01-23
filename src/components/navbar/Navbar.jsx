import {useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Link, alpha } from '@mui/material';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { openAbout,openSkill,openContact } from '../../action/pageRouterAction';
import { Icon } from '@iconify/react';





const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// My custom Typographay

const MyTypography = styled(Typography)(({theme}) =>({
  my: 2,
  color:theme.palette.navbarColor.main,
  padding:'6px',
  fontWeight:'bold',
  display: 'block',
  cursor:'pointer',
  '&:hover': {
    backgroundColor: alpha('#fff', 0.14),
  },
  '&:active':{
    backgroundColor: alpha('#fff',0.4)
  }
  
}))

// my custom Link
const MyLink = styled(Link)(({theme}) => ({
  padding:'8px',
  paddingBottom:'2px',
  color:'#bdbdbd',
  marginTop:'5px',
  cursor:'pointer',
  borderRadius:'20px',
  '&:hover': {backgroundColor: alpha('#fff', 0.14)},
  '&:active':{
    backgroundColor: alpha('#fff',0.4)
  }
}))


const Navbar = (props) => {
    // const [borderAbout,setBorderAbout] = useState(true);
    // const [borderSkill,setBorderSkill] = useState(false);
    // const [borderContact,setBorderContact] = useState(false);
    const handleAbout = () =>{
      props.openAbout();
      //setBorderAbout(true)
    }
    const handleSkill = () =>{
      props.openSkill();
      //setBorderSkill(true)
    }
    const handleContact = () =>{
      props.openContact();
      
    }
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
   

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{background:'transparent',boxShadow:'none'}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        
        <Typography
          variant="h6"
          noWrap
          component="a"
          onClick={() => handleAbout()}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'navbarColor.main',
            textDecoration: 'none',
            cursor:'pointer'
          }}
        >
          SHEPHERD
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
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
              display: { xs: 'block', md: 'none' },
              "& .MuiPaper-root": {
                background:'transparent',
                boxShadow:'none',
                marginY:'15px'
              }
              
            }}
          >
            <MyTypography sx={{mx:4,borderBottom: props.pageValues.about_page && '4px #e0e0e0 solid'}}
              onClick={() => handleAbout()}
            >
              Who am I
            </MyTypography>

            <MyTypography sx={{mx:4,borderBottom: props.pageValues.skill_page && '4px #e0e0e0 solid'}}
              onClick={() =>handleSkill()}
            >
              Skills
            </MyTypography>

            <MyTypography sx={{mx:4,borderBottom: props.pageValues.contact_page && '4px #e0e0e0 solid'}}
              onClick={() => handleContact()}
            >
              Connect
            </MyTypography>
          </Menu>
        </Box>
        
        <Typography
          variant="h7"
          noWrap
          component="a"
          onClick={() => handleAbout()}
          sx={{
            mr: 2,
            display: { sm: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'navbarColor.main',
            textDecoration: 'none',
          }}
        >
          SHEPHERD
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'center'}}>
        <MyTypography sx={{mx:4,borderBottom: props.pageValues.about_page && '4px #e0e0e0 solid'}}
              onClick={() => handleAbout()}
            >
              Who am I
            </MyTypography>

            <MyTypography sx={{mx:4,borderBottom: props.pageValues.skill_page && '4px #e0e0e0 solid'}}
              onClick={() =>handleSkill()}
            >
              Skills
            </MyTypography>

            <MyTypography sx={{mx:4,borderBottom: props.pageValues.contact_page && '4px #e0e0e0 solid'}}
              onClick={() => handleContact()}
            >
              Connect
            </MyTypography>
        </Box>

        <Box sx={{display:'flex' ,flexGrow: 0.5,justifyContent:'space-around'}}>
            
            <MyLink href='https://www.linkedin.com/in/mustafa-%C3%A7oban-4973101b4/'>
                <LinkedInIcon/>
            </MyLink>

            <MyLink href='https://github.com/mustafacoban96'>
              <GitHubIcon/>
            </MyLink>
  
            <MyLink href='https://twitter.com/must10810'>
              <XIcon/>
            </MyLink>

            <MyLink href='https://www.hackerrank.com/profile/mustafa_coban'>
              <Icon icon="fa-brands:hackerrank" color="#bdbdbd" width="25" />
            </MyLink>
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
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

const mapStateToProps = state =>{
  return {
    pageValues: state.pageValues
  }
}

const mapActionToProps = {openAbout,openSkill,openContact}
export default connect(mapStateToProps,mapActionToProps)(Navbar) 
