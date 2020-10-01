import React from 'react';
import { Tile, Board } from './minesweeper'
import GameBoard from './board'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            board: new Board(10, 10) // #grid
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        console.log("updated game")
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        // '\uDCA3' // bomb
        this.setState({ board: this.state.board })
    }

    render() {
        console.log("rendering game");
        if (this.state.board.lost()) {
            alert("sorry you've lost!");
        } else if (this.state.board.won()) {
            alert("DAMN you won!!");
        }

        return (
            <GameBoard board={this.state.board} updateGame={this.updateGame} />
        )
    }

}

export default Game