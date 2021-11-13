import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

import ExploreAll from './ExploreAll';

const Explore = () => {
    const [packages,setPackages]=useState([]);
    useEffect(() => 
    fetch('https://mighty-retreat-73527.herokuapp.com/packages')
    .then(res=> res.json())
    .then(data=>setPackages(data))
, [])
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{backgroundColor:'black', borderRadius:'20px', pb:3, mt:5, width:'100%'}}>
            <Grid container spacing={3} >
            {
                packages.map(pg => <ExploreAll key={pg._id} pg={pg}></ExploreAll>)
            }
            </Grid>
            
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;