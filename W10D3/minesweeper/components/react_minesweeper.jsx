import React from 'react';
import ReactDOM from 'react-dom'
import Game from './game'

console.log("we are in entry for minesweeper!");

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    ReactDOM.render(<Game />, root);
})
