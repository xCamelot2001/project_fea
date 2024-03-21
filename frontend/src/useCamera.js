import { useEffect, useRef } from "react";

const UseCamera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    const constraints = {
      video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        frameRate: { ideal: 30 },
      },
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        if (currentVideoRef) {
          currentVideoRef.srcObject = stream;
          currentVideoRef.play().catch((e) => console.log("Error playing video: ", e));
        }
      });
    }

    return () => {
      if (currentVideoRef && currentVideoRef.srcObject) {
        const tracks = currentVideoRef.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return { videoRef };
};

export default UseCamera;
