
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

var baseBin,leftBin,rightBin;

function preload()
{
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(750,700,1500,30);

	paper = new Paper(200,400,50);

	baseBin = new Dustbin(700,670,250,30);
	leftBin = new Dustbin(580,635,30,100);
	rightBin = new Dustbin(820,635,30,100);
  
}


function draw() {
  background(0);
 
  ground.display();

  paper.display();

  baseBin.display();
  leftBin.display();
  rightBin.display();

  image(binImage, 550,300,400,400);
        
  }

  function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});



	}






  }



