class Bob{
    constructor(x,y,color){
     var options={
         
         restitution:1,
         friction:0,
         frictionAir:0,
         density:1.2,
         slope:1,
         inertia:Infinity
     }
     //this.radius=radius;
     this.body=Bodies.circle(this.x,this.y,40,40,options);
     
     this.x=x;
     this.y=y;
     this.color=color;
     World.add(world,this.body);
     
    }
    display(){
       var paperpos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(paperpos.x,paperpos.y);
       rotate(angle); 
      noStroke();
       //rectMode(CENTRE);
       strokeWeight(3);
       fill(this.color);
       ellipse(0,0,40,40);
       
       pop()
    }
}
