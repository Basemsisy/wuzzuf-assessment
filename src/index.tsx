import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/config";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore().store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
