import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dashboard from './component/userDashboard/Dashboard';
import {Link, Route,Switch,withRouter} from 'react-router-dom';
import loginPage from './component/login/loginPage';
import logout from './component/login/logout';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={loginPage}/>
          <Route exact path="/dashboard" component={dashboard}/>
          <Route exact path="/logout" component={logout}/>
        </Switch>
      </div>
    );
  }
}

export default App;
