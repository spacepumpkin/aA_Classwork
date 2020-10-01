import React from 'react';
import GameTile from './tile';
// props = {board: whatever, function: asdfjf, fljsdf: dfsdf}
// {board, function} = props
// [x, y] = [x, y, z]
class GameBoard extends React.Component {
  constructor(props) {
    super(props);

  }

  createTiles(row, rowIdx) {
    return row.map((tile, tileIdx) => {
      let tileKey = `row-${rowIdx}-tile-${tileIdx}`;
      return (
        <GameTile key={tileKey} tile={tile} updateGame={this.props.updateGame} className="tile" />
      );
    });
  }

  createRows() {
    return this.props.board.grid.map((row, rowIdx) => {
      return (
        <div key={`row-${rowIdx}`} className="row">
          {this.createTiles(row, rowIdx)}
        </div>
      );
    });
  }

  render() {
    console.log("rendering board");
    return (
      <div className="grid" >
        {this.createRows()}
      </div>
    )
  }
};

export default GameBoard;