class Stone{
    constructor(x, y, r, img) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.r = r;
        this.img = img;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r + 20, this.r + 20);
        pop();
    }
}