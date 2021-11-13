import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SinglePackage = (props) => {
    const {_id,name, des,price} = props.pg || {};
    const history= useHistory()

  const handleDetails=(key)=>{
      const uri= `/details/${key}`
      history.push(uri)
  }

    
    return (
        
        <Grid item xs={12} sm={4} md={4} >
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor:'gray' }} variant="outlined">
                <Typography variant="h5" color="#ffff">{name}</Typography>
                <Typography variant="h6" color="#ffff">{des}</Typography>
                <Typography variant="subtitle" sx={{ display: 'block', my: 2,  }} >Price: ${price}</Typography>
                <button onClick={()=>handleDetails(_id)} style={{padding:'10px', backgroundColor:'black', color:'white' , borderRadius:'10px'}}>Details</button>
            </Paper>
        </Grid>
        
    );
};

export default SinglePackage;