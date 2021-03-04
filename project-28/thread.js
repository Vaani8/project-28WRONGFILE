class thread{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.thread= Constraint.create(options);
        World.add(world, this.thread);
}
    fly(){
        this.thread.bodyA=null;
    }

      display(){
            if(this.thread.bodyA){
            var pointA = this.thread.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }   
}
}