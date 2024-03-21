import React from 'react';
import UseCamera from './UseCamera';
import UseEmotionDetector from './UseEmotionDetector';

const CameraControl = () => {
  const { videoRef } = UseCamera();
  const emotion = UseEmotionDetector(videoRef);

  return (
    <div>
      Emotion: {emotion}
      <video ref={videoRef}></video>
    </div>
  );
};

export default CameraControl;
