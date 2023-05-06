class Body {
    constructor(posX, posY, radius, mass, col) {
        this.pos = createVector(posX, posY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = radius
        this.mass = mass
        this.color = col
        this.id = random()
    }

    show() {
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    update() {
        this.vel.add(deltaTime * this.acc);
        this.pos.add(this.vel.mult(deltaTime));
        this.acc = createVector(0, 0);
    }

    applyForce(force) {
        this.acc.add(force)
    }

    gravityAttractionForce(other) {
        return BIG_G * this.mass * other.mass / dist2(this.pos, other.pos);
    }
}