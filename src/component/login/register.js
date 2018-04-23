import React, {Component} from 'react';
import './src/style.scss';

class register extends Component{
    render(){
        return(
            <div className="col-lg-7 jumbotron left">
                <h1>Log In</h1>
                <form className=" mb-3"
                // onSubmit={this.AuthWithEmailAndPassword}
                >
                    {this.props.loginError &&
                    <div className="alert alert-danger col-lg-10">
                        <p>{this.props.loginError}</p>
                    </div>}
                    <center class="col-10">
                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                        <div class=" mb-3" htmlFor="inputEmail">
                            <input type="email" id="inputEmail" class="" placeholder="Email"/>
                        </div>
                        <div class=" mb-3" htmlFor="inputPassword">
                            <input type="password" id="inputPassword" class="" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary">Sign In</button>
                    </center>
                </form>
            </div>
        )
    }
}
export default register;