class Base{

    constructor(x,y,width,height){
        var option={
            'isStatic':true,
            'friction':0.2
        }

        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.color="black";
        World.add(world,this.body);

    }
    display(){
        fill(this.color)
        rectMode(CENTER);
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

    }
};