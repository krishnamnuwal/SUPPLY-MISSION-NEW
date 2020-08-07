const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;

var helicopter,bgImg,ground,package,line1,line2;
var box1,box2,box3;
function preload(){
	bgImg=loadImage("bg.jpg")
}


function setup(){

	var canvas=createCanvas(600,600);

	engine=Engine.create();
	world=engine.world;

    package= new Package(300,155,50,50);
	helicopter = new Helicopter(300,150,190,80);
	ground= new Ground(300,530,600,50);
	line1= new Ground(5,250,20,527);
	line2= new Ground(595,250,20,527);
	box1= new Box(300,498,140,15);
	box2=new Box(230,455,15,100);
	box3=new Box(370,455,15,100);

	
	
}

function draw(){
background(bgImg);


Engine.update(engine);
package.display();
helicopter.display();
ground.display();
line1.display();
line2.display();
box1.display();
box2.display();
box3.display();
console.log(package.body.position.x);
if((keyCode===DOWN_ARROW)){
	Matter.Body.setVelocity(package.body,{x:0,y:4})
	Matter.Body.setStatic(package.body,false);
	//package.body.position.x=package.body.position.x
	

	}
	
if(package.body.position.y>466){
	Matter.Body.setStatic(package.body,true);
}
if((package.body.position.y>380)&&package.body.position.x===360){

	Matter.Body.rotate(package.body, 90);
	Matter.Body.setVelocity(package.body,{x:0,y:1});
//Matter.Body.setStatic(package.body,true);

}

if((package.body.position.y>380)&&package.body.position.x===240){

	Matter.Body.rotate(package.body, 90);
	Matter.Body.setVelocity(package.body,{x:0,y:3});
    //Matter.Body.setStatic(package.body,true);

}


}

function keyPressed(){

	if((keyCode===RIGHT_ARROW)&&helicopter.body.position.x<540){
	
		helicopter.body.position.x=helicopter.body.position.x+30;
	
		if(package.body.position.y<156){
		package.body.position.x=helicopter.body.position.x;
		}
	
	}
	if((keyCode===LEFT_ARROW)&&helicopter.body.position.x>60){
	
		helicopter.body.position.x=helicopter.body.position.x-30;
		if(package.body.position.y<156){
		package.body.position.x=helicopter.body.position.x;
		}
	}

	
	
}






















 