let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {

  let grid = [];
  let new_row;

  for (let i = 0; i < 8; i++) {
    new_row = new Array(8);
    grid.push(new_row);
  }

  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {

  if (pos[0] < 0 || pos[0] >= 8)
    return false;
  if (pos[1] < 0 || pos[1] >= 8)
    return false;
  
  return true;

};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) 
    throw new Error('Not valid pos!');
  return this.grid[pos[0]][pos[1]];
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {

  if (this.isOccupied(pos))
    return this.getPiece(pos).color === color;
  else
    return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {

    return this.getPiece(pos) !== undefined;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir) { // piecesToFlip){
  // piecesToFlip
  // this._positionsToFlip(pos, color, dir, piecesToFlip)
  let output = [];
  let nextPos = [pos[0]+dir[0], pos[1]+dir[1]];

  while (this.isValidPos(nextPos) && this.isOccupied(nextPos) && !this.isMine(nextPos, color)) {
    output.push(nextPos); //[nextPos[0], nextPos[1]]);
    nextPos = [nextPos[0] + dir[0], nextPos[1] + dir[1]];
  }

  if (this.isValidPos(nextPos) && this.isOccupied(nextPos) && this.isMine(nextPos, color)) 
    return output;
  else
    return [];

  // if nextPos.color== isMine(color) 
  // then return output

};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

// position not occupied
// will actually flip something in some direction

  if (!this.isValidPos(pos) || this.isOccupied(pos))
    return false;

  // Can't break out??
  // Board.DIRS.forEach((dir) => {
  //   let output = this._positionsToFlip(pos, color, dir)
  //   if (output.length !== 0)
  //     return true;
  // });

  for (let i = 0; i < Board.DIRS.length; i++) {
    let output = this._positionsToFlip(pos, color, Board.DIRS[i])
    if (output.length !== 0)
      return true;
  }

  

  // AssertionError[ERR_ASSERTION]: false == true
  return false;


// Board.DIRS = [
//   [ 0,  1], [ 1,  1], [ 1,  0],
//   [ 1, -1], [ 0, -1], [-1, -1],
//   [-1,  0], [-1,  1]
// ];

};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {

  // throw error if position represents invalid move
  // change position
  // flip the stuff

  if (!this.validMove(pos, color))
    throw new Error("Invalid Move");

  this.grid[pos[0]][pos[1]] = new Piece(color); // place new piece here
  for (let i = 0; i < Board.DIRS.length; i++) {
    let flippable = this._positionsToFlip(pos, color, Board.DIRS[i]) //pos, color, dir
    for (let j = 0; j < flippable.length; j++) {
      this.grid[flippable[j][0]][flippable[j][1]].color = color;
    }
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};



module.exports = Board;
