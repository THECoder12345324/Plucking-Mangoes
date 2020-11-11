class Mango{
    constructor(x, y, r, img) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.image = img;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r + 30, this.r + 30);
        pop();
    }
}