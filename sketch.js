function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", results => {
    predictions = results;
  });
}

function modelReady() {
  console.log("Model Loaded!");
}

function draw() {
  background(220);
  image(video, 0, 0);

  if (predictions.length > 0) {
    let hand = predictions[0].landmarks;
    for (let i = 0; i < hand.length; i++) {
      let x = hand[i][0];
      let y = hand[i][1];
      fill(0, 255, 0);
      ellipse(x, y, 10, 10);
    }
  }
}