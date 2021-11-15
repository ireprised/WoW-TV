import { Paper, Typography } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';

const SingleReview = (props) => {
    const {review,currentValue,name} = props.reviwData || {};
    return (

       <div>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m:1,
                width: 200,
                height: 128,
                },
              }}
              >
                <Paper elevation={3} sx={{p:4}}>
                <Typography>
                  <q>{review}</q>
                </Typography>
                <Typography>
                  
                    &mdash; by <cite>{name}</cite>
                 
                </Typography>
                <Rating name="read-only" value={currentValue} readOnly />
              </Paper>
              
        </Box>
       </div>
        
    );
};

export default SingleReview;