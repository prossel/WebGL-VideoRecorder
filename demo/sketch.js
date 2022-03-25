let myFont;

function preload() {
  myFont = loadFont('AkzidenzGrotesk-Bold.otf');
}

function setup() {

  createCanvas(400, 300, WEBGL);
  pixelDensity(1);

  smooth();

  VideoRecorder.addButton();
  
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(myFont);
}

function draw() {
  background(220);

  rotateY(frameCount * 0.01);
  text("WebGL\nVideoRecorder", 0, 40);

  rotateY(-frameCount * 0.02);
  translate(0, -60);
  box(80);
}