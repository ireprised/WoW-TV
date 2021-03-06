import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('')
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user ={email};
        fetch('https://mighty-retreat-73527.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <div>
           <h2>This Admin page</h2> 
           <form onSubmit={handleAdminSubmit}>
           <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" sx={{backgroundColor:'black'}} variant="contained">Make Admin</Button>
           </form>
           {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;