const heapArr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7, 5, 11, 15]

// let circPos = {
//   x: 0,
//   y: 0
// }

let frameCount = 0;

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, heapArr.length - 1, 0, 1);
  slider.position(10,10);
  slider.size(windowWidth/4, 25);
  
  // circPos.x = windowWidth / 2;
  // circPos.y = windowHeight / 2;
}

function draw() {
  background(220);

  const windowCenter = {
    x: windowWidth/2,
    y: windowHeight/2
  }


  // TODO: Not reacting to slider check
  let completeBinaryTree = new CompleteBinaryTree(window, 40, windowCenter.x, windowCenter.y, nodeValues = heapArr, draw = false);

  highlightedNode = completeBinaryTree.nodes[slider.value()];
  highlightedNode.highlighted = true;
  // completeBinaryTree.nodes = 

  completeBinaryTree.draw();

  // let nodes = completeBinaryTree.nodes;
  
  // nodes[slider.value()].highlighted = true;

  // push();
  // noFill();
  // stroke(50, 200, 0);
  // strokeWeight(10);
  // circle(nodePoses[slider.value()].x, nodePoses[slider.value()].y, 45);
  // pop();

  // frameCount = (frameCount + 1) % nodePoses.length;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}