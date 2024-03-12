import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CameraControl from './CameraControl';
import InteractButton from './InteractButton';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <CameraControl />
      <InteractButton />
      <Footer />
    </div>
  );
}

export default App;
