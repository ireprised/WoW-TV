
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SinglePackage = (props) => {
    const {_id,name, des,price,img} = props.pg || {};
    const history= useHistory()
    
  const handleDetails=(key)=>{
      const uri= `/details/${key}`
      history.push(uri)
  }
  const styles = {
    paperContainer: {
        backgroundImage: `url(${img})`,
        opacity: 1,
        backgroundRepeat: 'no-repat',
        height: '75%'
    }
    
        
    
};

    
    return (
        
        <Grid item xs={12} sm={12} md={4} >
            <Paper style={styles.paperContainer}  sx={{ p: 2, textAlign: 'center' }} variant="outlined">
                <Typography variant="h5" color="#F7DC6F" sx={{marginLeft:'-150px'}}>{name}</Typography>
                <Typography variant="h6" color="#ffff" sx={{marginLeft:'-150px'}}>{des}</Typography>
                <Typography variant="h5" color="#FA8072" sx={{ display: 'block', my: 2, marginLeft:'-150px' }} >Price: ${price}</Typography>
                <button onClick={()=>handleDetails(_id)} style={{padding:'10px', backgroundColor:'black', color:'white' , borderRadius:'10px' , marginLeft:'-150px'}}>Get Subscribe</button>
            </Paper>
        </Grid>
        
    );
};

export default SinglePackage;