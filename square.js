class Confetti extends Particle {
    constructor(x, y) {
        super(x, y);
        this.bright = random(255);
        //for side lenght
        this.r = 10;
    }

    //to change size
    update() {
        super.update();
        this.r += random(-2, 2);
    }
    show() {
        strokeWeight(1);
        fill(this.bright);
        stroke(255);
        square(this.x, this.y, r);
    }
}