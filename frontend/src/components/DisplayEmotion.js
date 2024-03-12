import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayEmotion = ({ emotion }) => {
  return <p className="text-center lead">{emotion || 'Loading...'}</p>;
};

export default DisplayEmotion;
