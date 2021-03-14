const Engine = Matter.Engine ;
const World = Matter.World ;
const Body = Matter.Body ;
const Bodies = Matter.Bodies;

var engine, world, body;
var board, die;
var bluePawn;

function preload() {
 board = loadImage("sprites/background.png")
}

function setup() {
  createCanvas(725, 600);

  engine = Engine.create();
  world = engine.world;

  bluePawn = new BluePawn(28,570,50,50)

}

function draw() {
  background("white");

  Engine.update(engine)

  image(board,0,0,600,600)

  bluePawn.display();

  stroke("black")
  strokeWeight(1)
  fill("black")
  text(mouseX + "," + mouseY, mouseX, mouseY)

  stroke("black")
  strokeWeight(5)
  fill("black")
  line(0,600,600,600)
  line(600,700,600,1)

  drawDie(660,320,6);

}

function drawDie(x,y,side){

  stroke("black")
  strokeWeight(2)
  fill("white")
  rectMode(CENTER)
  rect(660,320, 100, 100, 20);

  fill("black")

  if(side === 1){
    circle(x,y,20)
  }
  else if(side === 2){
    circle(x-25,y-25,20)
    circle(x+25,y+25,20)
  }
  else if(side === 3){
    circle(x-27,y-27,20)
    circle(x,y,20)
    circle(x+27,y+27,20)
  } 
  else if(side === 4){
    circle(x-25,y-25,20)
    circle(x+25,y+25,20)
    circle(x+25,y-25,20)
    circle(x-25,y+25,20)
  }
  else if(side === 5){
    circle(x,y,20)
    circle(x-25,y-25,20)
    circle(x+25,y+25,20)
    circle(x+25,y-25,20)
    circle(x-25,y+25,20)
  }
  else if(side === 6){
    circle(x-25,y-30,20)
    circle(x+25,y+30,20)
    circle(x+25,y-30,20)
    circle(x-25,y+30,20)
    circle(x-25,y,20)
    circle(x+25,y,20)
  }

  stroke("black")
  strokeWeight(1)
  fill("skyblue")
  text(mouseX + "," + mouseY, mouseX, mouseY)

}
