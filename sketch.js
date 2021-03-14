let width = 20
let height = 20
const minWidth = 20;
 const maxWidth = 40;
 const minHeight = 20
 const maxHeight = 40
let gettingLarger = true;
let gettingHigher = true;

function setup() {
  createCanvas(1265, 670);
}

function draw() {
  background(240)
  if (mouseIsPressed) {
    ellipse(width/2,height/2);
    fill(35,30,98);
    
if(gettingLarger){
  width = width + 2;    
}else{
  width = width - 2;
if(gettingLarger){
  height = height + 2;    
}else{
  height = height - 2;
}

if(width < minWidth){
  gettingLarger = true;   
}else if(width > maxWidth){
  gettingLarger = false;
}
if(height < minHeight){
  gettingLarger = true;   
}else if(height > maxHeight){
  gettingLarger = false;
} 