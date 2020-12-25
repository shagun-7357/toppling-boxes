const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; 
var ground, ball;

function setup(){
   var canvas = createCanvas(400,400); 
   engine = Engine.create();
    world = engine.world;
   ground=new Ground()
    box1=new Box(210,210,30,40)
    box2=new Box(200,200,40,30)
}

function draw() {
  background("red");  
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
}