
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy,slingShot;
var x,y,stone;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(969,206,30);
	mango3=new mango(1125,214,30);
	mango4=new mango(1013,133,30);

	stoneObj=new Stone(235,420,30); 
	//slingShot = new Slingshot(stone.body,{x:230,y:400})
	slingShot=new Slingshot(stoneObj.body,{x:235,y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stoneObj.display();
  
  groundObject.display();
}
function mouseClicked()
{
	x= mouseX;
	y=mouseY;
	console.log(x);
	console.log(y);
}