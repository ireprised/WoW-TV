import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const ExploreAll = ({pg}) => {
    const {_id,name, des,price} = pg || {}
    const history= useHistory()

  const handleDetails=(_id)=>{
      const uri= `/details/${_id}`
      history.push(uri)
  }
    return (
        
            <Grid item xs={12} sm={4} md={4} >
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor:'gray' }} variant="outlined">
                <Typography variant="h5" color="#ffff">{name}</Typography>
                <Typography variant="h6" color="#ffff">{des}</Typography>
                <Typography variant="subtitle" sx={{ display: 'block', my: 2,  }} >Price: ${price}</Typography>
                <button  style={{padding:'10px', backgroundColor:'black', color:'white' , borderRadius:'10px'}} onClick={()=>handleDetails(_id)} class="btn btn-info btn-sm">Get Book</button>
            </Paper>
        </Grid>
        
    );
};

export default ExploreAll;