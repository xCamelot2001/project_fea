import { useEffect, useState } from 'react';

const UseEmotionDetector = (videoRef) => {
  const [emotion, setEmotion] = useState('');

  useEffect(() => {
    const capture = (video) => {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/png'));
      });
    };

    const interval = setInterval(() => {
      if (videoRef.current) {
        capture(videoRef.current).then(imageSrc => {
          fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageSrc }),
          })
          .then(res => res.json())
          .then(data => {
            setEmotion(data.emotion);
          });
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [videoRef]);

  return emotion;
};

export default UseEmotionDetector;
