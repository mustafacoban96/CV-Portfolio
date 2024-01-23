import React, { useEffect, useState } from 'react'
import { Box, Stack, TextField, Typography, alpha } from '@mui/material'
import * as yup from 'yup';
import { useFormik } from 'formik';
import {Button} from '@mui/material';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/Send';
import { flickerIn1 } from '../../theme/flickerIn1';


const WhiteTextField = styled(TextField)`
& .MuiOutlinedInput-root {
  & fieldset {
    border-color: white; /* Dış çerçeve rengi (normal durumda) */
  }

  &:hover fieldset {
    border-color: white; /* Dış çerçeve rengi (hover durumda) */
  }

  &.Mui-focused fieldset {
    border-color: white; /* Dış çerçeve rengi (focus durumda) */
  }
}

& .MuiFormLabel-root {
  color: white; /* Label rengi */
}

& .MuiInputBase-input {
  color: white; /* Input metni rengi */
}
`;



const ContactFormBox = styled(Box)(({contact}) =>({
  backgroundColor: alpha('#0000',0.5),
  width:'35%',
  padding:'1.5%',
  marginLeft:'60%',
  marginTop:'0.7%',
  marginBottom:'7.5%',
  border:'2px white dashed',
  animation: contact && `${flickerIn1} 2s linear both`,
  '@media (max-width: 750px)': {
    width: '80%',
    marginTop:'27%',
    float:'none',
    marginLeft:'10%',
    padding:'20px',
  },

}))



const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('name is required'),
    surname: yup
    .string('Enter your surname')
    .required('surname is required'),
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    message: yup
    .string('Enter your message')
    .required('message is required'),
});



const Contact = () => {

  const [contact,setContact] = useState(false)
  useEffect(() =>{
    setTimeout(() =>{
      //animation
      setContact(true);
    },500)
  },[])
  const formik = useFormik({
    initialValues: {
      email: '',
      name:'',
      surname:'',
      message:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    
    <ContactFormBox component="form" onSubmit={formik.handleSubmit} contact={contact.toString()}>
      <Typography variant='h4' sx={{color:'white',marginY:'10px',textAlign:'center',fontWeight:'bolder'}}>Contact</Typography>
      <Stack direction={{xs:'column', sm:'row'}}  spacing={{ xs: 1, sm: 2, md: 4 }}>
        <WhiteTextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          
        />
        <WhiteTextField
          fullWidth
          id="surname"
          name="surname"
          label="Surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
          
        />
      </Stack>
      <WhiteTextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{marginY:'3%'}}
      />
       <WhiteTextField
          id="message"
          name='message'
          label="Message"
          multiline
          rows={4}
          fullWidth
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
    <Button variant="contained" type="submit" 
    endIcon={<SendIcon/>}
    sx={{ 
      width: '30%', 
      p: 1, 
      marginLeft: '70%', 
      marginRight: '0%', 
      marginTop: '20px', 
      backgroundColor: alpha('#ffff',0.91),
      color:'black',
      
      '&:hover':{
        backgroundColor: alpha('#0000',1),
        color:'white'
      },
      '&:active':{
        backgroundColor: alpha('#0000',0.85)
      }
      }}>
        Send
      </Button>
      <Typography sx={{color:'white',fontWeight:'bolder'}}>mustafacoban181@gmail.com</Typography>
  </ContactFormBox>
  )
}

export default Contact
