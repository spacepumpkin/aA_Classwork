import React from "react";
import ReactDOM from "react-dom";
import Clock from './clock';
import Tabs from './tabs';

console.log("widgets!")

const tabs = [
  {title: "1", content: "I am the first"},
  {title: "2", content: "Second pane here"},
  {title: "3", content: "Third pane here"},
]

// Creates a re-usable `SimpleComponent` class.
const RootComponent = () => {
	// render() {
  return (
      <div>
        <div id="clock"></div>
          <Clock />
        <div id="tabs"> 
          <Tabs tabs={tabs} />
        </div>
      </div>
  );
	// }
}



document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById("main");
  // let tabsElement = document.getElementById("tabs")
  ReactDOM.render(<RootComponent/>, main)
    // ReactDOM.render(<Tabs tabs={tabs}/>, tabsElement)

})