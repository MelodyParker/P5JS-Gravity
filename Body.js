class Body {
    constructor(posX, posY, radius, mass, col) {
        this.pos = createVector(posX, posY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = radius
        this.mass = mass
        this.color = col
    }

    show() {
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    update() {
        this.vel += deltaTime * this.acc;
        this.pos += deltaTime * this.vel;
        this.acc = createVector(0, 0);
    }

    applyForce(force) {
        this.acc.add(force)
    }

    gravityAttractionForce(other) {
        BIG_G * this.mass * other.mass / dist2(this.pos, other.pos)
    }
}