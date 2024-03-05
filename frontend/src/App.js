import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCamera from './useCamera';

function App() {
  const { videoRef } = useCamera(); // Using the custom hook to get videoRef
  const [data, setData] = useState({}); // State to store the response data
  const intervalRef = useRef(null); // Ref to manage the interval

  useEffect(() => {
    // Setting up an interval to capture image from video and send it for processing
    intervalRef.current = setInterval(() => {
      if (videoRef.current) {
        const imageSrc = capture(videoRef.current); // Capturing image from the video
        // Assuming you are sending this image to a backend service for processing
        fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: imageSrc }),
        })
        .then((res) => res.json())
        .then((data) => {
          setData(data); // Updating state with the response
          console.log(data);
        });
      }
    }, 1000); // Running this every second

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to capture image from video
  const capture = (video) => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png'); // Returning the captured image as a data URL
  };

  return (
    <div>
      <p>{data.emotion || 'Loading...'}</p> {/* Displaying the response data */}
      <video ref={videoRef} className="video-feed" autoPlay></video> {/* Video element for camera feed */}
      <Button> This is Button </Button> {/* Just a button for UI, not linked to any action */}
    </div>
  );
}

export default App;
