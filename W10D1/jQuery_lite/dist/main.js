/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// jQuery Lite wrapped collection\nclass DOMNodeCollection {\n  constructor (nodes) {\n    this.nodes = nodes;\n  }\n\n  each(cb) {\n    this.nodes.forEach(cb);\n  }\n\n  // innerHTML\n  html(inner) {\n    if (typeof inner === \"string\") {\n      this.each( (ele) => {\n        ele.innerHTML = inner;\n      })\n    } else {\n      return this.nodes[0].innerHTML;\n    } \n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  // appendChild()\n  append(children) {\n    if (this.nodes.length === 0) return;\n\n\n    // if input is string, append to innerHTML\n    if (typeof children === \"string\") {\n      // let $child = document.createElement(children);\n      this.each((parent) => {\n        // parent.appendChild(children)\n        // parent.appendChild($child);\n        parent.innerHTML += children;\n      })\n    \n      // if input is already a DOMNodeCollection, just append deep dup copy of each child\n    } else if (children instanceof DOMNodeCollection) {\n      this.appendChildren(children);\n      \n      // if input is an HTMLElement or HTMLCollection\n    } else if (typeof children === \"object\") {\n      let children = $1(children); // convert to DOMNodeCollection\n      this.appendChildren(children);\n    }\n    return undefined;\n  }\n\n  // getAttribute()/setAttribute()\n  attr(name, value) {\n    // if user puts in a value, use as a setter\n    if (typeof value !== \"undefined\") {\n      this.each( (node) => {\n        node.setAttribute(name, value);\n        // does a JSON.stringify(value)\n      })\n    } else { // else use as a getter for attr of first node\n      return this.nodes[0].getAttribute(name);\n    }\n    return undefined;\n  }\n\n  // classList.add()\n  addClass(classNames) {\n    // can take in 1+ class names; splits class names into array\n    classNames = classNames.split(\" \");\n    this.each( (node) => {\n      node.classList.add(...classNames); // turn it back into comma-sep list\n    })\n    return undefined;\n  }\n\n  // classList.remove()\n  removeClass(classNames) {\n    classNames = classNames.split(\" \");\n    this.each( (node) => {\n      node.classList.remove(...classNames);\n    })\n    return undefined;\n  }\n\n  // children\n  children() {\n    let allChildren = [];\n    this.each( (node) => {\n      allChildren = allChildren.concat(Array.from(node.children));\n    })\n    return new DOMNodeCollection(allChildren);\n  }\n\n  // parent\n  parent() {\n    let allParents = [];\n    this.each( (node) => {\n      if (typeof node.parent !== \"undefined\") {\n        allParents = allParents.concat(Array.from(node.parent));\n      }\n    })\n    return new DOMNodeCollection(allParents);\n  }\n\n  // find / querySelectorAll(\"parent child\")\n  find(selector) {\n    // if (!this.nodes.length) { return undefined }\n    let matches = [];\n    this.each( (node) => {\n      let search = node.querySelectorAll(selector);\n      matches = matches.concat(search);\n    })\n    return new DOMNodeCollection(matches);\n  }\n\n  // removeChild / Child.remove()\n  remove() {\n    this.each( (node) => {\n      node.remove();\n    })\n  }\n}\n\n// Helper function for DOMNodeCollection.append(children)\nDOMNodeCollection.prototype.appendChildren = function(children) {\n  this.each((parent) => {\n    children.each((child) => {\n      parent.appendChild(child.cloneNode(true));\n    })\n  })\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n// $1 (selector)\nfunction $1 (element) {\n  let matches;\n  if (element instanceof HTMLElement) {// || element instanceof HTMLCollection) {\n    matches = new Array(element); // Array.from didn't work on single element\n\n  } else if (element instanceof HTMLCollection) {\n    matches = Array.from(element); // Array.from on collection\n\n  } else {\n    matches = Array.from(document.querySelectorAll(element)); // on CSS selector\n  }\n  return new DOMNodeCollection(matches);\n}\n\nwindow.$1 = $1;\n\n// DOMNodeCollection\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });