import React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

const Reviews = () => {
  const [value, setValue] = React.useState(2);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 4,
        speed: 1500
      };
    return (
      <div sx={{backgroundColor:'black'}}>
        <h2 style={{textAlign:'center'}}>Our Client Says</h2>
        <Slider {...settings} >
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
                  <q>This is best service for ever in tv ott</q>
                </Typography>
                <Typography>
                  
                    &mdash; Jeremy Keith, <cite>Mental models</cite>
                 
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </Paper>
              </Box>
          </div>
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
                  <q>This is best service for ever in tv ott</q>
                </Typography>
                <Typography>
                 
                    &mdash; Jeremy Keith, <cite>Mental models</cite>
                  
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </Paper>
              </Box>
          </div>
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
                  <q>This is best service for ever in tv ott</q>
                </Typography>
                <Typography>
                  
                    &mdash; Jeremy Keith, <cite>Mental models</cite>
                  
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </Paper>
              </Box>
          </div>
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
                  <q>This is best service for ever in tv ott</q>
                </Typography>
                <Typography>
                  
                    &mdash; Jeremy Keith, <cite>Mental models</cite>
                  
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </Paper>
              </Box>
          </div>
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
                  <q>This is best service for ever in tv ott</q>
                </Typography>
                <Typography>
                  
                    &mdash; Jeremy Keith, <cite>Mental models</cite>
                  
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </Paper>
              </Box>
          </div>
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
                  <q>This is best service for ever in tv ott</q>
                </Typography>
                <Typography>
                  
                    &mdash; Jeremy Keith, <cite>Mental models</cite>
                  
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </Paper>
              </Box>
          </div>
        </Slider>
      </div>
    );
};

export default Reviews;