let myFont;

function preload() {
  myFont = loadFont('AkzidenzGrotesk-Bold.otf');
}

function setup() {

  createCanvas(1920, 1080, WEBGL);

  smooth();

  // Reduce size of preview
  let scalePreview = 0.25;
  let cnv = document.getElementById('defaultCanvas0');
  cnv.style.width = round(width * scalePreview) + "px";
  cnv.style.height = round(height * scalePreview) + "px";

  VideoRecorder.addButton();
  
  textAlign(CENTER, CENTER);
  textSize(200);
  textFont(myFont);
}

function draw() {
  background(220);

  push();
  //translate(width / 2, height/2);
  rotateY(frameCount * 0.01);
  text("Hello World", 0, 200);
  pop();
  
  rotateY(-frameCount * 0.01);
  translate(0, -200);
  box(400);
}