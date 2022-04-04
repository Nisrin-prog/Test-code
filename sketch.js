function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("skyblue");
  if(keyIsDown(RIGHT_ARROW)){
    background("green");
  }
}