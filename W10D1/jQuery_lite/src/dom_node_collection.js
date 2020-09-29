// jQuery Lite wrapped collection
class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(cb);
  }

  // innerHTML
  html(inner) {
    if (typeof inner === "string") {
      this.each( (ele) => {
        ele.innerHTML = inner;
      })
    } else {
      return this.nodes[0].innerHTML;
    } 
  }

  empty() {
    this.html("");
  }

  // appendChild()
  append(children) {
    if (this.nodes.length === 0) return;


    // if input is string, append to innerHTML
    if (typeof children === "string") {
      // let $child = document.createElement(children);
      this.each((parent) => {
        // parent.appendChild(children)
        // parent.appendChild($child);
        parent.innerHTML += children;
      })
    
      // if input is already a DOMNodeCollection, just append deep dup copy of each child
    } else if (children instanceof DOMNodeCollection) {
      this.appendChildren(children);
      
      // if input is an HTMLElement or HTMLCollection
    } else if (typeof children === "object") {
      let children = $1(children); // convert to DOMNodeCollection
      this.appendChildren(children);
    }
    return undefined;
  }

  // getAttribute()/setAttribute()
  attr(name, value) {
    // if user puts in a value, use as a setter
    if (typeof value !== "undefined") {
      this.each( (node) => {
        node.setAttribute(name, value);
        // does a JSON.stringify(value)
      })
    } else { // else use as a getter for attr of first node
      return this.nodes[0].getAttribute(name);
    }
    return undefined;
  }

  // classList.add()
  addClass(classNames) {
    // can take in 1+ class names; splits class names into array
    classNames = classNames.split(" ");
    this.each( (node) => {
      node.classList.add(...classNames); // turn it back into comma-sep list
    })
    return undefined;
  }

  // classList.remove()
  removeClass(classNames) {
    classNames = classNames.split(" ");
    this.each( (node) => {
      node.classList.remove(...classNames);
    })
    return undefined;
  }

  // children
  children() {
    let allChildren = [];
    this.each( (node) => {
      allChildren = allChildren.concat(Array.from(node.children));
    })
    return new DOMNodeCollection(allChildren);
  }

  // parent
  parent() {
    let allParents = [];
    this.each( (node) => {
      if (typeof node.parent !== "undefined") {
        allParents = allParents.concat(Array.from(node.parent));
      }
    })
    return new DOMNodeCollection(allParents);
  }

  // find / querySelectorAll("parent child")
  find(selector) {
    // if (!this.nodes.length) { return undefined }
    let matches = [];
    this.each( (node) => {
      let search = node.querySelectorAll(selector);
      matches = matches.concat(search);
    })
    return new DOMNodeCollection(matches);
  }

  // removeChild / Child.remove()
  remove() {
    this.each( (node) => {
      node.remove();
    })
  }
}

// Helper function for DOMNodeCollection.append(children)
DOMNodeCollection.prototype.appendChildren = function(children) {
  this.each((parent) => {
    children.each((child) => {
      parent.appendChild(child.cloneNode(true));
    })
  })
}

module.exports = DOMNodeCollection;