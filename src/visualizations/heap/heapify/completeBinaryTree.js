/**
 * 
 * @param {import('p5')} p 
 * @param {object} options
 * @param {number} options.x
 * @param {number} options.y 
 * @param {number} options.diameter
 * @param {number|string} options.txt
 */
function drawNode(p = window, { x = 0, y = 0, diameter = 10, txt = '' }) {
    p.push();

    p.circle(x, y, diameter);

    p.textAlign(CENTER, CENTER);
    p.textSize(diameter / 2);
    p.text(txt, x, y);

    p.pop();
}

/**
 * 
 * @param {import('p5')} p 
 * @param {object} options
 * @param {number} options.rootX
 * @param {number} options.rootY
 * @param {number[] | string[]} options.nodeValues
 */
function drawCompleteBinaryTree(p = window, { rootX = 0, rootY = 0, nodeValues = [] }) {
    p.push();

    let level, numItemsInLevel;
    let dotPoses = [{x: rootX, y: rootY}];
    
    for (let i = 1; i < nodeValues.length; i++) {
        level = Math.floor(Math.log2(i + 1)); // determines the y value
        numItemsInLevel = Math.pow(2, level);

        let numItemsTillLastLevel = Math.pow(2, level) - 1;
        let indexInRow = i - numItemsTillLastLevel; // determines the x value

        y = rootY + 80 * level;
        x = rootX + (150 * (indexInRow - (numItemsInLevel - 1) / 2) * level / (numItemsInLevel - 1));

        dotPoses.push({ x, y });

        parentX = dotPoses[Math.floor((i + 1) / 2) - 1].x;
        parentY = dotPoses[Math.floor((i + 1) / 2) - 1].y;
        p.line(x, y, parentX, parentY);
    }

    for (let i = 0; i< nodeValues.length; i++) {
        drawNode(p, {x: dotPoses[i].x, y: dotPoses[i].y, diameter: 40, txt: nodeValues[i]});
    }

    p.pop();
}