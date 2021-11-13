import { Button, Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
    socialIcon: {
        color: 'white !important',
        border: '1px solid white !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: 'gray !important',
            color: '#fff !important'
        }
    }
})
const Footer = () => {
    const { socialIcon } = useStyle();
    return (
        <footer style={{backgroundColor:'black', borderRadius:'20px'}}>
            <Container sx={{backgrounColor:'black'}}>
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography variant='h1' sx={{color:'white', fontSize:'100px', textAlign:'center'}}>
                            WoW TV
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'gray', mb: 1 }}>Our Packages</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Emergency Support</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>FAQ</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Basic Tutorials</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Services</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'gray', mb: 1 }}>Our Packages</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Emergency Support</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>FAQ</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Basic Tutorials</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Services</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'gray', mb: 1 }}>Our Address</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>New York - 101010 Hudson</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Yards</ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <Typography>Call Now</Typography>
                        <Button sx={{backgroundColor:'gray', color:'white'}} variant="contained">+8065432145</Button>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4,color:'white' }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;