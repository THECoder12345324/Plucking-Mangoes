class Tree{
    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.image = img;
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y,this.w, this.h);
    }
}