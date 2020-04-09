import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import NewUsersContainer from "./components/newUsers/NewUsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <HeaderContainer />
        <div className="App-wrapper">
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <NewUsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
