import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthContainer from './login/AuthContainer';
import './App.css';
import './login/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LoginForm from './login/LoginContainer';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>          
          <Route exact path='/' component={LoginForm} />
          <AuthContainer />
        </Switch>
        <Modal />
        {/* <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3 fixed-bottom">© 2019 Copyright:
            <a href="#/"> Under Construction</a>
          </div>
        </footer> */}
      </React.Fragment>
    );
  }
}

export default App;
