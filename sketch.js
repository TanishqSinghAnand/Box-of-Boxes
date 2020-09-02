const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boxA, ground;
var boxes = [];

var slider;
var val;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 800, 4500,200);
  slider = createSlider(0, 10, 1);
  slider.position(window.innerWidth-170, window.innerHeight-100);
}

function mousePressed(){
    var randomw = random(12 , 120)
    var randomh = random(12,120);
    boxA = new Box(mouseX, mouseY, randomw, randomh);
    boxes.push(boxA);
}

function draw(){
  background("red");
  val = slider.value();
  world.gravity.y = val;
  textSize(20)
  text("Gravity : " + val , window.innerWidth-170, window.innerHeight-112 )
  Engine.update(engine);
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  ground.display();
}
