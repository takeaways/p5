

let angle = 0;
function setup(){
  createCanvas(windowWidth,windowHeight)
  slider = createSlider(0, TWO_PI, PI / 4, 0.1);
}

function draw(){
  background(51);
  angle = slider.value()
  stroke(255)
  translate(windowWidth / 2, windowHeight)
  branch(100)
}

const color = () => Math.floor((Math.random() * 255))
function branch(len){
  
  line(0 , 0, 0 , -len)
  translate(0, -len)
  
  if(len > 4){
    push()
    stroke(color(),color(),color())
    rotate(angle)
    branch(len * 0.67)
    pop()
    push()
    stroke(color(),color(),color())
    rotate(-angle);
    branch(len * 0.67);
    pop()
  }

  
}


