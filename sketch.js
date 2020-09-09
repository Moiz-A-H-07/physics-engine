const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine,world
var ground,ball

function setup() {
  
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var options={
   isStatic:true
 }
 var balloptions={
   restitution:1.0
 }
 ground=Bodies.rectangle(200,390,200,20,options)
 ball=Bodies.circle(200,100,20,balloptions)
  World.add(world,ground)
  World.add(world,ball);
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}