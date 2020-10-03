import React from "react";
import App from "./app.jsx";
import { Provider } from "react-redux";

const Root = (props) => {
    return (
        <Provider store={props.store}>
          <App></App>
        </Provider>
    )
}

export default Root;