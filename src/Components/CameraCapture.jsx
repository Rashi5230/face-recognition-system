import React, { useEffect, useRef, useState } from "react";

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useref(null);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      streamRef.current = mediaStream;
      videoRef.current.srcObject = mediaStream;
    
    } catch (error) {
      console.error(error);
      alert("Camera Permission Denied");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    onCapture(image);

    stopCamera();
  };

  return (
    <div className="flex flex-col items-center mt-5">

      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded-xl shadow-lg w-96"
      />

      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
      />

      <button
        onClick={captureImage}
        className="bg-green-600 text-white px-5 py-2 rounded-lg mt-4"
      >
        Capture Face
      </button>

    </div>
  );
};

export default CameraCapture;