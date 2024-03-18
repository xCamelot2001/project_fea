import React from 'react';
import { Container } from '@mui/material';
import CameraControl from './CameraControl';
import DisplayEmotion from './DisplayEmotion';




function App() {
  return (
    <Container sx={{bgcolor:"grey", height:"100vh" }}>
      <DisplayEmotion />
      <CameraControl />
    </Container>
  );
}

export default App;
