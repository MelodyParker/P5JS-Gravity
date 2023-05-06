class Body {
    constructor(posX, posY, radius, mass, col) {
        this.pos = createVector(posX, posY);
        this.r = radius
        this.mass = mass
        this.color = col
    }

    show() {
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}