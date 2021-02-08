
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Paperobj,paperImage;
var dustbinImage;

function Preload(){
	paperImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	Paper_options = {
		restituition:1.0
	}
 Paper = Bodies.circle(200,450,70,paper_options);
	
	engine = Engine.create();
	world = engine.world;

	Paperobj = new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ellipseMode(RADIUS)
  ellipse(paper.position.x,paper.position.y,paper.radius,20,20)
 
  Paperobj.display();
  groundObject.display();
  dustbinObj.display();


}

