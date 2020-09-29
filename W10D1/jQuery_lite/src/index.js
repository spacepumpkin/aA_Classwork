const DOMNodeCollection = require("./dom_node_collection");

// $1 (selector)
function $1 (element) {
  let matches;
  if (element instanceof HTMLElement) {// || element instanceof HTMLCollection) {
    matches = new Array(element); // Array.from didn't work on single element

  } else if (element instanceof HTMLCollection) {
    matches = Array.from(element); // Array.from on collection

  } else {
    matches = Array.from(document.querySelectorAll(element)); // on CSS selector
  }
  return new DOMNodeCollection(matches);
}

window.$1 = $1;

// DOMNodeCollection

