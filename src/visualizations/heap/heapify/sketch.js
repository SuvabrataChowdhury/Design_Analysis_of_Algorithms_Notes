heapArr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7, 5, 11, 12, 44, 89]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  drawCompleteBinaryTree(window, {rootX: windowWidth/2, rootY: windowHeight/2, nodeValues: heapArr});
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}