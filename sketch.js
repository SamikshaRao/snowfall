
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world;
var groundObj;
var back;
var snowfall=[]


function preload(){
	back=loadImage("snow1.jpg");
}
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

 groundObj = new ground(400,570,800,20)

 if (frameCount%70==0){
	 for(var i=0; i<100; i++){
		 snowfall.push(new snow(random(0,800),random(0,600),5))
	 }
 }
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(back);
groundObj.display();
for (var i=0; i<100; i++){
	snowfall [i].display()
	snowfall [i].updateY()
}


 
}






