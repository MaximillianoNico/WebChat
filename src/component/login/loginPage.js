import React, {Component} from 'react';
// import './src/style.scss';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import action from './../src/action';
import SignIn from './signIn';
import Register from './register';

class loginPage extends Component{
    
    
    CreateUserWithEmailAndPassword= (e) =>{
        alert("Register");
    }
    moveToRegister = () =>{
        this.props.dispatch(
            action.moveToRegister()
        )
    }
    render(){
        return(
            <div className="container-fluid">
                <center className="contain-box">
                    <div className="col-lg-8">
                        <div className="row">
                                <div className="col-lg-5 jumbotron right">
                                    <i className="fas fa-comments"></i>
                                    <h1>WebChat</h1>
                                </div>
                                
                                    <Switch>
                                        <Route exact path="/" component={SignIn}/>
                                        <Route exact path="/register" component={Register}/>
                                    </Switch>
                            </div>
                    </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        // loginError: state.loginError
    }
}
export default connect(mapStateToProps)(loginPage);