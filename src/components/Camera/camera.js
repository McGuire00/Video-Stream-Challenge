import React from "react";
import Webcam from "webcam-easy";

import "./camera.css";

function Camera() {
  // document.addEventListener("DOMContentLoaded", function (event) {
  //   const webcamElement = document.getElementById("webcam");
  //   const canvasElement = document.getElementById("canvas");
  //   const webcam = new Webcam(webcamElement, "user", canvasElement);
  //   webcam.start()
  // });

  // https://stackoverflow.com/questions/46142783/dom-isnt-loaded-yet-when-react-tries-to-registers-component-which-runs-in-windo
  // document.addEventListener("DOMContentLoaded", function (event) {
  //   const webcamElement = document.getElementById("webcam");
  //   const canvasElement = document.getElementById("canvas");
  //   const webcam = new Webcam(webcamElement, "user", canvasElement);
  //   webcam
  //     .start()
  //     .then((result) => {
  //       console.log("webcam started");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  function handleStart() {
    const webcamElement = document.getElementById("webcam");
    const canvasElement = document.getElementById("canvas");
    const webcam = new Webcam(webcamElement, "user", canvasElement);

    webcam.stream();
  }

  function handleStop() {
    const webcamElement = document.getElementById("webcam");
    const canvasElement = document.getElementById("canvas");
    const webcam = new Webcam(webcamElement, "user", canvasElement);

    webcam.stop();
  }

  return (
    <div className="video-container">
      <div className="video-feed">
        <video
          id="webcam"
          autoplay
          playsinline
          width="640"
          height="480"
        ></video>
        <canvas id="canvas"></canvas>
      </div>
      <div className="btns">
        <button className="btn-1" onClick={handleStart}>
          Start Recording
        </button>
        <button className="btn-2" onClick={handleStop}>
          Stop Recording
        </button>
        <button className="btn-3">Submit Video</button>
      </div>
    </div>
  );
}

export default Camera;
