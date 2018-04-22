import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route,Switch,withRouter} from 'react-router-dom';
import loginPage from './component/login/loginPage';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={loginPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
