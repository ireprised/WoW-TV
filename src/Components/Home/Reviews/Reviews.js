import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import SingleReview from './SingleReview';

const Reviews = () => {
  const [reviewDatas, setReviewDatas] = useState([])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 4,
        speed: 1500
      };

      useEffect(() => 
      fetch('https://mighty-retreat-73527.herokuapp.com/reviews')
      .then(res=> res.json())
      .then(data=>setReviewDatas(data))
  , [])
    return (
      <div sx={{backgroundColor:'black'}}>
        <h2 style={{textAlign:'center'}}>Our Client Says</h2>
        <Slider {...settings} >
          
              
              {
                  reviewDatas.map(reviwData => <SingleReview key={reviwData._id} reviwData={reviwData} ></SingleReview>)
                }
          
          {/* <div>
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
          </div> */}
        </Slider>
      </div>
    );
};

export default Reviews;