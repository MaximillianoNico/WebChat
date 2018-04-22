import React, {Component} from 'react';
import './src/style.scss';

class loginPage extends Component{
    render(){
        return(
            <div className="container-fluid">
                <center class="contain-box">
                    <div className="col-lg-8">
                        <div className="row">
                                <div className="col-lg-5 jumbotron right">
                                    <i class="fas fa-comments"></i>
                                    <h1>WebChat</h1>
                                </div>
                                <div className="col-lg-7 jumbotron left">
                                    <h1>Log In</h1>
                                    <form className=" mb-3">
                                        <div class="col-9">
                                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                            <div class="input-group mb-2">
                                                <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="Email"/>
                                            </div>
                                            <div class="input-group mb-2">
                                                <input type="password" class="form-control" id="inlineFormInputGroup" placeholder="Password"/>
                                            </div>
                                            <button type="submit" className="btn btn-lg btn-primary">Sign In</button>
                                        </div>
                                    </form>
                                    <p><a href="">Register</a> or Sign In With</p>
                                    <center className="mb-2">
                                        <div className="row col-6">
                                            <button className="btn btn-lg btn-primary btn-icons fb-icons">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>
                                            <button className="btn btn-lg btn-icons google-icons">
                                                <i class="fab fa-google"></i>
                                            </button>
                                            <button className="btn btn-lg btn-primary btn-icons instagram-icons">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default loginPage;