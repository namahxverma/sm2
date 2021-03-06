var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var box2;
var box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	box1=new Box(400,570,200,20);
	box2 = new Box(320,620,20,150);
	box3 = new Box(470,570,20,150);

	// write the values here .ok maam
	// Namah this is good dear 
	// NP 
	//ok maam maam can i submit this and start my another projet 
	//sure dear
	


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 Engine.run(engine);

	
  
}


function draw() {
 
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rectMode(CENTER);
  
  keyPressed();
  drawSprites();
 box1.display();
 box2.display();
 box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
	 Matter.Body.setVelocity(packageBody,1.0);
	 // ok maam
	 // i am sending this zip folder to u . Unzip it and upload it on github from ur pc u can do that right

	 //maam my github will work as it was not workind before??
	 //yeah lets try wait
	 // namah want help dear?
	 //maam the link is unvalid 
	 // wait i will send u the link to submit be here i will show u 
	 //ok

	 //maam what to do
	 // lets keep it like this only namah it is not going to solve as we havent learn about destroy it here

    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }/// Done namah?
  //maam thnqu
  //wlcm dear continue 
  // i will go and have dinner once u complete it upload itfrom here only okay?
  // u can send the link via whatsapp i will keep it open for u 
  //bbye i will be back in half hour u can continue namah.ok maam thnq
}



