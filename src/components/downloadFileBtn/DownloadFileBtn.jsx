import React, { useEffect, useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import IconButton from '@mui/material/IconButton';
import {Box, Typography, alpha } from '@mui/material';
import styled from '@emotion/styled';
import { slideInBlurredLeft } from '../../theme/slideInBlurredLeft';



const MyIconBox = styled(Box)(({rotate}) => ({
  display:'flex',
  justifyContent:'end',
  marginRight:'3%',
  animation: rotate && `${slideInBlurredLeft}  0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both`,
  alignItems:'center'


}))

const MyDownloadIcon = styled(FileDownloadIcon)(() =>({
  fontSize:'2.7rem',
  background: alpha('#d50000',0.7),
  padding:'8px',
  borderRadius:'50%',
  transition: 'font-size 0.5s',
  '&.hover':{
    fontSize:'2.9rem'
  }
}))

const pdfUrl = "MustafaCobanCV.pdf"

const handleDownload = () => {
  console.log("start")
  // Dosya yolu belirtin
  const fileUrl = pdfUrl;

  // Bir link oluşturun
  const my_link = document.createElement("a");
  my_link.href = fileUrl;

  // Dosya adını belirtin
  my_link.setAttribute("download", "MustafaCobanCV.pdf");

  // Linki tıklayın ve dosyayı indirin
  document.body.appendChild(my_link);
  my_link.click();

  // Linki kaldırın
  document.body.removeChild(my_link);

  console.log("finish")
};

const DownloadFileBtn = () => {

  const [rotate, setRotate] = useState(false);
  const [flash,setFlash] = useState(false);

  useEffect(() =>{
    setTimeout(() => {
      setRotate(true);
    }, 500);
  },[])

  useEffect(() =>{
      
    const intervalId = setInterval(() => {
      setFlash((prevFlash) => !prevFlash);
    }, 1000);

    return () => clearInterval(intervalId); 
      
  },[])

  
  return (
    <MyIconBox rotate={rotate.toString()}>
        <Typography variant='h6' sx={{color:'white',px:2}}>Download CV</Typography>
      <IconButton 
      onClick={handleDownload}
      target="_blank"
      rel="noreferrer"
      //href="/MustafaCobanCV.pdf"
      //download="MustafaCobanCv.pdf"
      sx={{
        color:'white',
        background: flash ? alpha('#d50000',0.2) : alpha('#d50000',0.6),
        '&:hover': {
          background: alpha('#d50000',0.62),
        },
      }}>
          <MyDownloadIcon/>
      </IconButton>
    </MyIconBox>
    
  )
}

export default DownloadFileBtn
