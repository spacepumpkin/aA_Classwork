import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  console.log("rendering root...")
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1>, root);
})
