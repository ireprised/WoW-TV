import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png'

const Banner = () => {
    const style = {
        minHeight: 700,
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        marginBottom: 10,
        marginTop: 10,
        borderRadius:20       
    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color:'#ffff' }}>
                            Your Entertainment <br /> Start Here
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, my: 3,color:'#ffff' }}>
                            Wow tv is presenting All kinds of sports and gaming videos using our virtual packaging system where 
                            you get all kinds of live action of games and movie information for you
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src="" alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;