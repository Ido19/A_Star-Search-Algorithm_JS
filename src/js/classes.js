// The Node class

class Node {
  #neighbors = [];

  constructor() {}

  get neighbors() {
    return this.#neighbors;
  }
  set neighbors(neighbors) {
    this.#neighbors = neighbors;
  }
  addNeighbor(neighbor) {
    if (this.#neighbors.includes(neighbor)) return;
    this.#neighbors.push(neighbor);
  }
  removeNeighbor(neighbor) {
    const index = this.#neighbors.indexOf(neighbor);
    if (index > -1) {
      this.#neighbors.splice(index, 1);
    }
  }

  static findPath(startNode, targetNode) {}
}

// End of Node class

// The Grid class

class Grid {
  #tiles = [];
  #numberOfTiles;

  constructor(numOfTiles) {
    if (typeof numOfTiles !== 'number' || numOfTiles < 0) numOfTiles = 0;
    for (let i = 0; i < numOfTiles; i++) {
      this.#tiles.push(String.fromCharCode('A'.charCodeAt(0) + i));
    }
    this.#numberOfTiles = numOfTiles;
  }

  get tiles() {
    return this.#tiles;
  }

  get numberOfTiles() {
    return this.#numberOfTiles;
  }
}

Grid.prototype.findPath = function (startTileName, targetTileName) {
  const startTile = this.tiles.find(t => t.name === startTileName);
  const targetTile = this.tiles.find(t => t.name === targetTileName);
};

// End of Grid class

// class SquareGrid extends Grid {
//     constructor() {
//         super();
//     }
// }
