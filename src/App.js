import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <div className="App-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                messages={props.state.messagesPage.messages}
                dialogs={props.state.messagesPage.dialogs}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={props.state.profilePage.posts}
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
