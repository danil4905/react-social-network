import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = state => {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
// rerendering DOM when use this function
