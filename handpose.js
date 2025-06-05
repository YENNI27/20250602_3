function setup() {
  createCanvas(400, 400);
  const video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide();

  const handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", results => {
    drawHands(results);
  });
}

function modelReady() {
  console.log("Model Loaded!");
}

function drawHands(results) {
  background(220);
  if (results.length > 0) {
    const landmarks = results[0].landmarks;
    for (let i = 0; i < landmarks.length; i++) {
      const [x, y] = landmarks[i];
      fill(0, 255, 0);
      ellipse(x, y, 10, 10);
    }
  }
}

function draw() {
  // The draw function is intentionally left blank as the drawing is handled in drawHands.
}