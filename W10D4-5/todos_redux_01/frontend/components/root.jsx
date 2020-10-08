import React from "react";
import App from "./app.jsx";
import { Provider } from "react-redux";

const Root = (props) => {
  console.log("Root Component/Provider is passing down props.store...")
  return (
    <Provider store={props.store}>
      <App></App>
    </Provider>
  )
}

export default Root;