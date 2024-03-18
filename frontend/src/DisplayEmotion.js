import { Typography } from '@mui/material';
import React from 'react';

 const DisplayEmotion = ({emotion}) => {
  return (
    <Typography variant='h2' sx={{my: 4, textAlign:"center", color:"primary.main"}}>
      {emotion}
    </Typography>
  );
}

  export default DisplayEmotion;

