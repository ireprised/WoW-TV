import { Alert, Grid } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

import { useForm } from "react-hook-form";




const AddPackages = () => {
    const [packageAddSuccess,setPackageAddSuccess] = useState(false)
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
      axios.post('https://mighty-retreat-73527.herokuapp.com/packages',data)
      .then(res=>{
        if(res.data.insertedId){
            setPackageAddSuccess(true)
        }
        reset(res);
      })
      
  };

    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                    {packageAddSuccess && <Alert severity="success" >Package added Succesfully</Alert>}
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("name")} defaultValue="Give Package name" required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("des")} defaultValue="Give description"required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="number" {...register("price")} defaultValue="Add price" required/>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("access")} defaultValue="Access Devices" required/>
                                <label style={{color:'red', fontWeight:'700'}}>***Make sure image size 364*185 and uploaded in - https://imgbb.com/ then direct link url here *** Example: https://i.ibb.co/LdBbsc2/im-fa2.png</label>
                                <input style={{width:'100%', padding:'20px' , backgroundColor:'black', color:'white', borderRadius:'10px', marginBottom:'8px'}}type="text" {...register("img")} defaultValue="give imgbb url link" required/>
                                <input type="submit" style={{padding:'10px', backgroundColor:'black', color:'white' , borderRadius:'10px'}} defaultValue="Place Order" />
                            </form>
                    </Grid>
        </div>
    );
};

export default AddPackages;