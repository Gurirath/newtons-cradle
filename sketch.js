
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(300,600,46)
	bob2=new Bob(208,600,46)
	bob3=new Bob(116,600,46)
	bob4=new Bob(392,600,46)
	bob5=new Bob(484,600,46)
	bob6=new Bob(576,600,46)
	bob7=new Bob(668,600,46)
	bobDiameter=40;

	roof1=new Roof(200,100,1200,40)
    chain1=new Chain(bob3.body,roof1.body,-bobDiameter*1.7,0)
	chain2=new Chain(bob2.body,roof1.body,-bobDiameter*-0.5,0)
	chain3=new Chain(bob1.body,roof1.body,-bobDiameter*-2.7,0)
	chain4=new Chain(bob4.body,roof1.body,-bobDiameter*-4.9,0)
	chain5=new Chain(bob5.body,roof1.body,-bobDiameter*-7.1,0)
	chain6=new Chain(bob6.body,roof1.body,-bobDiameter*-9.3,0)
	chain7=new Chain(bob7.body,roof1.body,-bobDiameter*-11.5,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#7FFFD4");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  drawSprites();
 
}



