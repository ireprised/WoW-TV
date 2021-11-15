import React from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container, IconButton, Paper, Typography } from '@mui/material';
import bg from '../../images/bg.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const Orders = () => {
    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [bookingSuccess,setbookingSuccess] = useState(false)
    const [specificDetail,setSpecificDetail] = useState([])
    const {user} =useAuth(); 
 useEffect(() =>
      fetch("https://mighty-retreat-73527.herokuapp.com/packages")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])

console.log(user);
useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail._id==id)
        setSpecificDetail(matchedData);
        console.log(matchedData)
        
    }
    

}
,[details,id])



 


const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
      axios.post('https://mighty-retreat-73527.herokuapp.com/orders',data)
      .then(res=>{
        if(res.data.insertedId){
            setbookingSuccess(true)
        }
        reset(res);
      })
      
  };


  const styleForPaper={
      paperContainer: {
        backgroundImage: `url(${specificDetail?.img})`,
        opacity: 1,
        backgroundRepeat: 'no-repat',
        height: '75%'
    }
  }





    const style = {
        minHeight: 700,
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        background: `url(${bg}), linear-gradient(#BFC9CA,#CCD1D1)`,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        marginBottom: 10,
        marginTop: 10,
        borderRadius:20       
    }
    
    return (
        <div style={style}>
        <Container>
                <IconButton href="/" rel="noopener noreferrer">
                    <KeyboardBackspaceIcon></KeyboardBackspaceIcon> back to home
                </IconButton>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}> 
                        <Paper style={styleForPaper.paperContainer} sx={{ p: 2, textAlign: 'center', backgroundColor:'gray' }} variant="outlined">
                                <Typography variant="h5" color="#ffff">{specificDetail?.name}</Typography>
                                <Typography variant="h6" color="#ffff">Product Detail : {specificDetail?.des}</Typography>
                                <Typography variant="h6" color="#ffff">Access on : {specificDetail?.access}</Typography>
                                <Typography variant="h3" sx={{ display: 'block', my: 2, color:'white' }} >Price : ${specificDetail?.price}</Typography>
                        </Paper>   
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    {bookingSuccess && <Alert severity="success" >Booked Succesfully</Alert>}
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("package_name")} defaultValue={specificDetail?.name} required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="number" {...register("price")} defaultValue={specificDetail?.price} required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("name")} defaultValue={user?.displayName} required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="email" {...register("email")} defaultValue={user?.email} required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("address")} defaultValue="give your address" required/>
                                <input type="submit" style={{padding:'10px', backgroundColor:'black', color:'white' , borderRadius:'10px'}} defaultValue="Place Order" />
                            </form>
                    </Grid>
                    
            </Grid>
        </Container>
    </div>
    );
};

export default Orders;