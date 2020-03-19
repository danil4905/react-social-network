import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  debugger;
  return (
    <BrowserRouter>
      <Header />
      <div className="App-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs store={props} />} />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
