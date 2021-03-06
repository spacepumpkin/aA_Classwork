import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./app";


const Root = function({store}) {
  console.log("rendering Root...");
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
}

export default Root;