import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import NewUsersContainer from "./components/newUsers/NewUsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <div className="App-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <NewUsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
