import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const ExploreAll = ({pg}) => {
    const {_id,name, des,price,img} = pg || {}
    const history= useHistory()
    const style ={
        paperContainer: {
            backgroundImage: `url(${img})`,
            opacity: 1,
            backgroundRepeat: 'no-repat',
            height: '75%'
        }
    }

      const handleDetails=(_id)=>{
      const uri= `/details/${_id}`
      history.push(uri)
      }
  
  
    return (
        
            <Grid item xs={12} sm={4} md={4} >
            <Paper style={style.paperContainer} sx={{ p: 2, textAlign: 'center', backgroundColor:'gray' }} variant="outlined">
                <Typography variant="h5" color="#F7DC6F" sx={{marginLeft:'-150px'}}>{name}</Typography>
                <Typography variant="h6" color="#ffff" sx={{marginLeft:'-150px'}}>{des}</Typography>
                <Typography variant="h5" color="#FA8072" sx={{ display: 'block', my: 2, marginLeft:'-150px' }}>Price: ${price}</Typography>
                <button  style={{padding:'10px', backgroundColor:'black', color:'white' , borderRadius:'10px' , marginLeft:'-150px'}}onClick={()=>handleDetails(_id)} class="btn btn-info btn-sm">Get Book</button>
            </Paper>
        </Grid>
        
    );
};

export default ExploreAll;