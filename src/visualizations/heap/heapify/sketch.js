heapArr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7, 5, 44, 67, 89, 90, 94, 99, 100, 110]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let level, numItemsInLevel;
  let dotPoses = [];

  for(let i = 0; i<heapArr.length; i++) {
    level = Math.floor(Math.log2(i+1)); // determines the y value
    numItemsInLevel = Math.pow(2,level);

    let numItemsTillLastLevel = Math.pow(2, level) - 1;
    let indexInRow = i - numItemsTillLastLevel; // determines the x value

    y = windowHeight/2 + 80 * level;
    x = windowWidth/2 + ((level === 0) ? 0 : (150 * (indexInRow - (numItemsInLevel-1)/2) * level/(numItemsInLevel - 1)));

    circle(x, y, 20);

    dotPoses.push({x,y});

    if(i !== 0 ) {
      parentX = dotPoses[Math.floor((i+1)/2) - 1].x;
      parentY = dotPoses[Math.floor((i+1)/2) - 1].y;
      line(x,y, parentX, parentY);
    }
  }

  // console.log(dotPoses);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}