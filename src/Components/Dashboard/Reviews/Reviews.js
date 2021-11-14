import { TextField } from '@mui/material';
import React from 'react';

const Reviews = () => {
    return (
        <div>
           <form>
                <TextField fullWidth id="outlined-basic" label="Give Your Valued Review" variant="outlined" />
           </form>
        </div>
    );
};

export default Reviews;