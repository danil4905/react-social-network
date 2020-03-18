import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// rerendering DOM when use this function
