import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CameraFeed = ({ videoRef }) => {
  return (
    <div className="d-flex justify-content-center">
      <video ref={videoRef} className="video-feed" autoPlay style={{ border: '2px solid #000' }}></video>
    </div>
  );
};

export default CameraFeed;
