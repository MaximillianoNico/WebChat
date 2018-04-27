import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import action from './../src/action';
import {connect} from 'react-redux';
import firebase from 'firebase';

class signIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            login:true,
            register:false
        },
        this.AuthWithEmailAndPassword = this.AuthWithEmailAndPassword.bind(this);
    }

    AuthWithEmailAndPassword= (e) =>{
        e.preventDefault();
        let email = e.target.inputEmail.value;
        let password = e.target.inputPassword.value;
        this.props.dispatch(
            action.AuthenticationFirebase(email,password)
        )
    }
    render(){
        return(
            <div className="col-lg-7 jumbotron left">
                <h1>Log In</h1>
                <form className=" mb-3"
                onSubmit={this.AuthWithEmailAndPassword}
                >
                    {this.props.loginError &&
                    <div className="alert alert-danger">
                        <p>{this.props.loginError}</p>
                    </div>}
                    <center className="col-10">
                        <label className="sr-only" for="inlineFormInputGroup">Username</label>
                        <div className=" mb-3">
                            <input type="email" id="inputEmail" className="" placeholder="Email"/>
                        </div>
                        <div className=" mb-3">
                            <input type="password" id="inputPassword" className="" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary">Sign In</button>
                    </center>
                </form>
                <p>
                    <Link to="/register">Register </Link>
                    or Sign In With
                </p>
                <center className="mb-2">
                    <div className="row col-7">
                        <button className="btn btn-lg btn-primary btn-icons fb-icons">
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="btn btn-lg btn-icons google-icons">
                            <i className="fab fa-google"></i>
                        </button>
                        <button className="btn btn-lg btn-primary btn-icons instagram-icons">
                            <i className="fab fa-instagram"></i>
                        </button>
                    </div>
                </center>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        loginError: state.loginError
    }
}
export default connect(mapStateToProps)(signIn);