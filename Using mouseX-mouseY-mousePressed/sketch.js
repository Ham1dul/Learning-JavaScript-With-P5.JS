function setup() { //drawn only once
    createCanvas(640, 400); 
    background(0, 0, 0);
}

function draw() { //repeatedly drawn 
  noStroke()
  fill(255,255,255)
  ellipse(mouseX, mouseY, 50, 50); //redraws the cirlce to mouse location
}

function mousePressed(){ //resets the background when mouse is pressed
    
  background(255, 0, 255);     
}