class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            lenght:200    
    }
    this.pointB=pointB;
    this.pointX=bodyA.x;
    this.pointy=bodyA.y-250;

    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){

        
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(4);
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}
}