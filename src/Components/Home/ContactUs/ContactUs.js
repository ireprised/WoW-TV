import { Button, Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const ContactUS = () => {
    const useStyle = makeStyles({
        root: {
            background: 'black',
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            borderRadius:'20px',
            textAlign: 'center',
            padding: '30px',
            marginTop: 100
        },
        textArea: {
            border: 0,
            outline: 0,
            width: '830px',
            margin: '20px 0',
            borderRadius: 3,
            fontFamily: 'inherit',
            fontSize:'18px',
            fontWeight:'100',
            padding: 10
        }
    })
    const { root, textArea } = useStyle()
    return (
        <div className={root}>
            <Container maxWidth="md">
                <Typography variant="h4" color="#ffff">Contact us</Typography>
                <TextField
                    fullWidth
                    placeholder="Email"
                    margin="normal"
                    required
                    sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                />
                <TextField
                    fullWidth
                    placeholder="Subject"
                    margin="normal"
                    required
                    sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                />
                <textarea rows={10} className={textArea} placeholder="Your Message"></textarea>
                <Button sx={{backgroundColor:'gray', px:4}} variant="contained">Submit</Button>
            </Container>
        </div>
    );
};

export default ContactUS;