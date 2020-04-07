import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import NewUsersContainer from "./components/newUsers/NewUsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
function App(props) {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <div className="App-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <NewUsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
