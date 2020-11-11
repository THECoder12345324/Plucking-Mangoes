class Sling{
    constructor(body1, point2, stiffness1, length1) {
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: stiffness1,
            length: length1
        } 
        this.thebody = body1;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        if (this.sling.bodyA != null) {
            var point1 = this.sling.bodyA.position;
            var point2 = this.sling.pointB;
            line(point1.x, point1.y, point2.x, point2.y);
        }
    }
    fly() {
        this.sling.bodyA = null;
    }
    attach() {
        this.sling.bodyA = this.thebody
    }
}