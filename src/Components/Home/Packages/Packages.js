import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SinglePackage from './SinglePackage';

const Packages = () => {
    const [packages,setPackages]=useState([]);
    useEffect(() => 
    fetch('https://mighty-retreat-73527.herokuapp.com/packages')
    .then(res=> res.json())
    .then(data=>setPackages(data))
, [])
    
    return (
        <Container sx={{backgroundColor:'black', borderRadius:'20px', pb:3, width:'100%'}}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#ffff', textAlign: 'center', p: 2 }}>Our Services</Typography>
            <Grid container spacing={3} >
            {
                packages.map(pg => <SinglePackage key={pg._id} pg={pg}></SinglePackage>)
            }
            </Grid>
            
        </Container>
    );
};

export default Packages;