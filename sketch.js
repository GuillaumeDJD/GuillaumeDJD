function setup() {
  createCanvas(1265, 670);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    fill(35,30,98);
  } else {
    fill(240,45,75);
  }
  ellipse(mouseX, mouseY, 80, 80);
}