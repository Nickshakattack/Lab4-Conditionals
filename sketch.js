let x;
let y;
let dx;
let dy;
let radius;
let r;
let g;
let b;
let bg;

function setup() {
  createCanvas(400, 400);
  createRandomBGColor();
  createBall(); // Use the new function to set up the ball
  noStroke();
}

function draw() {
  background(bg);
  fill(color(r, g, b));
  circle(x, y, radius);
  x += dx; 
  y += dy;

  // Boundary checks
  if (x - radius < 0 || x + radius > width) {
    dx *= -1;
  }
  if (y - radius < 0 || y + radius > height) {
    dy *= -1;
  }

  // Increment and wrap red color value
  r = (r + 1) % 256; 
}

function setRandomPosition(xMin = 0, yMin = 0, xMax = width, yMax = height) {
  x = random(xMin, xMax);
  y = random(yMin, yMax);
}

function setRandomVelocity() {
  dx = random(-1, 1);
  dy = random(-1, 1);
}

function createRandomColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function createRandomBGColor() {
  bg = color(random(255), random(255), random(255));
}

function createBall() {
  setRandomPosition();
  setRandomVelocity();
  radius = random(10, 20);
  createRandomColor();
}

function keyPressed() {
  createRandomBGColor();
  createBall(); // Create a new ball when a key is pressed
}
