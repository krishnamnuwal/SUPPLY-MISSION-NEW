class Helicopter {

	constructor(x,y,width,height){

		var option={
			'isStatic':true
		}

	  this.body=Bodies.rectangle(x,y,width,height,option);
	  this.width=width;
	  this.height=height;
	 
	  World.add(world,this.body);
	  this.image=loadImage("helicopter.png");
	}

	display(){
		imageMode(CENTER);
		image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
		




	}

};