heapArr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }
}

class Node {
  constructor(position, value, size) {
    this.pos = position;
    this.value = value;
    this.size = size;
  }

  draw() {
    circle(this.pos.x, this.pos.y, this.size);
    text(this.value, this.pos.x, this.pos.y);
    textAlign(CENTER, CENTER);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  element = heapArr[0];

  // node = circle(windowWidth/2, windowHeight/2, 20);
  // node_txt = text(element, windowWidth/2, windowHeight/2);

  // node2 = circle(windowWidth/2 - 20, windowHeight/2 + 20, 20);
  // node2_txt = text(heapArr[1], node2.position().x , node2.position().y);

  node = new Node(new Position(windowWidth/2, windowHeight/2), 4, 20);
  node.draw();

  node2 = new Node(new Position(windowWidth/2 - 20, windowHeight/2 + 20), 16, 20);
  node2.draw();
}
