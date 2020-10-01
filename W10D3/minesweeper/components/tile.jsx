import React from 'react';
// import { Tile } from './minesweeper';

class GameTile extends React.Component {
  constructor(props) {
    super(props); // {tile, updateGame}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // only for checking whether altKey was pressed; do game logic in updateGame
    event.preventDefault();
    const flagged = event.altKey;
    let tile = this.props.tile;

    // pass in tile object and whether altKey was pressed
    this.props.updateGame(this.props.tile, flagged);
  }

  render() {
    console.log("rendering tile");
    // this.bombed = ; true or false depending on if it has bomb
    // this.explored = false; initial state
    // this.flagged = false; initial state

    // Unicode:
    // `\u{000A0}` or html &#xa0; space
    // `\u{2691}` flag
    // `\u{1F4A3}` bomb

    let tile = this.props.tile;

    // if it's not flagged or explored
    let tileClass = ""; // default unexplored/unflagged
    let tileValue = ""; // default unexplored/unflagged

    // if it's flagged, add flag; or if it's explored, add count or bomb
    if (tile.flagged) {
      tileClass = " flagged";  // CSS flagged
      tileValue = '\u{2691}'; // flag

    } else if (tile.explored) {
      tileClass = " explored"; // CSS explored

      if (tile.bombed) {
        tileClass += " bombed"; // CSS bombed
        tileValue = '\u{1F4A3}';// bomb
      } else {
        let count = tile.adjacentBombCount(); // count of adjacent bombs
        tileValue = (count === 0) ? "" : `${count}`; // display count if not 0
      }
    }

    return (
      <div onClick={this.handleClick} className={`tile${tileClass}`}>{tileValue}</div>
    );
  };
}

export default GameTile;