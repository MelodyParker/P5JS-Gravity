let body1;
let bodies = [];

function dist2(vec1, vec2) {
    let xDist = vec1.x - vec2.x;
    let yDist = vec1.y - vec2.y;
    return xDist * xDist + yDist * yDist;
}


function setup() {
    createCanvas(400, 400);
    body1 = new Body(200, 200, 30, 10, "#0000FF");
    bodies.push(body1);
    noStroke();
}

function draw() {
    background("#00FFFF");
    for (let body of bodies) {
        body.show();
    }

}

function mouseClicked() {
    bodies.push(new Body(mouseX, mouseY, 20, 10, color(random(0,255), random(0,255), random(0,255))));
}