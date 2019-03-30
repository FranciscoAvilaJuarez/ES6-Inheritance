class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //boolean variabl 
    }

    update() {
        this.x += randon(-5, 5);
        this.y += random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(24);
        square(this.x, this.y);
    }
}