import React from "react";
import Webcam from "webcam-easy";

import "./camera.css";

function Camera() {
  const webcamElement = document.getElementById("webcam");
  const canvasElement = document.getElementById("canvas");
  const webcam = new Webcam(webcamElement, "user", canvasElement);

  webcam
    .start()
    .then((result) => {
      console.log("webcam started");
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      {/* <video id="webcam" autoplay playsinline width="640" height="480"></video>
      <canvas id="canvas" class="d-none"></canvas> */}
    </div>
  );
}

export default Camera;
