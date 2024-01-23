import styled from '@emotion/styled';
import { Box, alpha} from '@mui/material';
import { useEffect, useState } from 'react';
import { Typography} from '@mui/material';
import { flickerIn1 } from '../../theme/flickerIn1';


const AboutMe = styled(Box)(({about}) =>({
    padding:'10px',
    border:'4px lightgray solid',
    margin:'8%',
    width:'40%',
    background: alpha('#9e9e9e',0.13),
    animation: about && `${flickerIn1} 2s linear both`,
    '@media (max-width: 600px)': {
        width: '70%',
        marginTop:'25%',
        marginLeft:'15%'
      },
    
    
  }));

const About = () => {
    const [about,setAbout] = useState(false)
  useEffect(() =>{
    setTimeout(() =>{
      //animation
      setAbout(true);
    },500)
  },[])
  return (
    <AboutMe about={about.toString()}>
        <Typography variant='h3' sx={{color:'#f5f5f5',fontWeight:'bold'}}>Hi,</Typography>
        <Typography variant='h3' sx={{color:'#f5f5f5',fontWeight:'bold'}}>I'm Mustafa Çoban</Typography>
        <Typography variant='h6' sx={{color:'#e0f2f1',fontWeight:'bold',paddingLeft:'15px',marginTop:'12px'}}>
          I am a junior full-stack web developer , and studying Computer Engineering department at Hasan Kalyoncu University. Also I interested web security as hobby.I am passionate and talented in web development and, constantly striving to improve myself and keep up with the latest innovations.
        </Typography>
      </AboutMe>
  )
}

export default About
