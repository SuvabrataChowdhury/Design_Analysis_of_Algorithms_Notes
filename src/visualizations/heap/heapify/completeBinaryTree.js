class Node {
    _highlighted;

    constructor(p5, txt, {x, y, diameter}, highlighted = false, draw = true) {
        this.p = p5;

        this._txt = txt;
        this.circParams = {x, y, diameter};

        this.highlighted = highlighted

        if (draw) {
            this.draw();
        }
    }

    moveTo = (x, y) => {
        this.circParams.x = x;
        this.circParams.y = y;

        this.draw();
    }

    get txt() {
        return this._txt;
    }

    set txt(txt) {
        this._txt = txt;
    }

    get x() {
        return this.circParams.x;
    }

    get y() {
        return this.circParams.y;
    }

    get highlighted() {
        return this._highlighted;
    }

    set highlighted (highlighted) {
        this._highlighted = highlighted;

        this.draw();
    }

    draw = () => {
        this._drawCircle();
        this._drawText();
    }

    _drawCircle = () => {
        this.p.push();

        if (this.highlighted) {
            this.p.stroke(50, 200, 0);
            this.p.strokeWeight(10);
        }

        this.p.circle(this.circParams.x, this.circParams.y, this.circParams.diameter);

        this.p.pop();
    }

    _drawText = () => {
        this.p.push();

        if (this.highlighted) {
            // this.p.strokeWeight(3);
            this.p.strokeWeight(5);
            this.p.fill(0, 250, 20);
        }

        this.p.textAlign(CENTER, CENTER);
        this.p.textSize(this.circParams.diameter / 2);
        this.p.text(this.txt, this.circParams.x, this.circParams.y);

        this.p.pop();
    }
}

class CompleteBinaryTree {
    _nodes;

    constructor(p, diameter, rootX, rootY, nodeValues, draw = true) {
        this.p = p;

        this.diameter = diameter;
        this.rootX = rootX;
        this.rootY = rootY;

        this.nodes = nodeValues;

        if(draw) {
            this.draw();
        }
    }

    get nodes() {
        return this._nodes;
    }

    set nodes(nodeValues) {
        this._nodes = this._getNodes(nodeValues);

        // this.draw();
    }

    _getNodes = (nodeValues) => {
        let level, numItemsInLevel;
        // let nodes = [{x: rootX, y: rootY}];
        let nodes = [new Node(p5 = this.p, nodeValues[0], {x: this.rootX, y: this.rootY, diameter: this.diameter}, draw = false)];
        
        for (let i = 1; i < nodeValues.length; i++) {
            level = Math.floor(Math.log2(i + 1)); // determines the y value
            numItemsInLevel = Math.pow(2, level);

            let numItemsTillLastLevel = Math.pow(2, level) - 1;
            let indexInRow = i - numItemsTillLastLevel; // determines the x value

            let y = this.rootY + 80 * level;
            let x = this.rootX + (150 * (indexInRow - (numItemsInLevel - 1) / 2) * level / (numItemsInLevel - 1));

            nodes.push(new Node(p5 = this.p, nodeValues[i], {x, y, diameter: this.diameter}, draw = false));

            // p.line(x, y, parentX, parentY);
        }

        return nodes;
    }

    draw = () => {
        for (let i = 1; i< this.nodes.length; i++) {
            let parentX = this.nodes[Math.floor((i + 1) / 2) - 1].x;
            let parentY = this.nodes[Math.floor((i + 1) / 2) - 1].y;
           
            this.p.line(this.nodes[i].x, this.nodes[i].y, parentX, parentY); 
        }

        for (let i = 0; i<this.nodes.length;i++) {
            this.nodes[i].draw();
        }
    }
}

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
    // p.push();

    // p.circle(x, y, diameter);

    // p.textAlign(CENTER, CENTER);
    // p.textSize(diameter / 2);
    // p.text(txt, x, y);

    // p.pop();

    return new Node(p5 = p, txt = txt, {x, y, diameter});
}

/**
 * 
 * @param {import('p5')} p 
 * @param {object} options
 * @param {number} options.rootX
 * @param {number} options.rootY
 * @param {number[] | string[]} options.nodeValues
 */
function drawCompleteBinaryTree(p = window, { rootX = 0, rootY = 0, nodeValues = [] }) { //TODO: Return some object which one can interact
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

    let nodes = [];
    for (let i = 0; i< nodeValues.length; i++) {
        nodes.push(drawNode(p, {x: dotPoses[i].x, y: dotPoses[i].y, diameter: 40, txt: nodeValues[i]}));
    }

    p.pop();

    return nodes;
}