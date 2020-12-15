
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Mouse = Matter.Mouse;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;
var engine,world,canvas;
var bob1,bob2,bob3,bob4,bob5,stand;
var sling1,sling2,sling3,sling4,sling5;
var mouseRope



function setup() {
	canvas=createCanvas(windowWidth/2, windowHeight/2);


	engine = Engine.create();
	world = engine.world;

	let canvasMouse=Mouse.create(canvas.elt)
	canvasMouse.pixelRatio=pixelDensity();
	let options={
		mouse:canvasMouse
		
	}
	mouseRope=MouseConstraint.create(engine,options);
	World.add(world,mouseRope);
    
	//Create the Bodies Here.
	bob1=new Bob(200,400,"red");
	bob2=new Bob(250,400,"red");
	bob3=new Bob(300,400,"red");
	bob4=new Bob(350,400,"red");
	bob5=new Bob(400,400,"red");
	sling1=new Rope(bob1.body,{x:200,y:100})
	sling2=new Rope(bob2.body,{x:250,y:100})
	sling3=new Rope(bob3.body,{x:300,y:100})
	sling4=new Rope(bob4.body,{x:350,y:100})
	sling5=new Rope(bob5.body,{x:400,y:100})
	stand=new Roof(300,100,400,10)


	Engine.run(engine);
  
}


function draw() {
	background(255);
  rectMode(CENTER);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  stand.display();
 
}
function MouseDragged(){
	Matter.body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}



