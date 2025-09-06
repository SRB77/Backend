// FaceMood.jsx
import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

export default function FacialExpression({setSongs}) {
  const videoRef = useRef(null);
  const [mood, setMood] = useState("Detecting...");
  const [showMood, setShowMood] = useState(false);

  useEffect(() => {
    const start = async () => {
      // Load models
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      //ask for camera access

      // Start video
      if (navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }
    };
    start();
  }, []);

  const detect = async () => {
    if (videoRef.current) {
      const detection = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      if (detection?.expressions) {
        // pick the emotion with max probability
        const expressions = detection.expressions;
        const mood = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );
         setMood(mood);
         return mood;
      } else {
        setMood("No face detected");
        return "No face detected"
      }
    }
  };
  const handleDetectMood = async () => {
    const currentMood = await detect();
    setShowMood(true);
    console.log(currentMood);
    const res = await axios.get(`http://localhost:3008/moodSongs?mood=${currentMood}`);
    console.log(res.data);
    setSongs(res.data.songs);  //! More work is going to be done here   
  };

  return (
    <div className="mood-container">
      <h2 className="section-title">Live Mood Detection</h2>
      <div className="mood-element">
        <div className="video-frame">
          <video ref={videoRef} autoPlay muted className="user-video-feed" />
        </div>
        <div className="description">
          <h3>Live Mood Detection</h3>
          <p>Your current mood is being analyzed in real-time. Enjoy music tailored to your feelings.</p>
          <button onClick={handleDetectMood} className="start-button">Start Listening</button>
        </div>
      </div>
      {showMood && <div className="mood-result">Current Mood: {mood}</div>}
    </div>
  );
}
