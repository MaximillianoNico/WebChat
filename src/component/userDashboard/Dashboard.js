import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class Dashboard extends Component{
    render(){
        if(this.props.user!= null){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 jumbotron"></div>
                        <div className="col-9 jumbotron"></div>
                    </div>
                    <h1>Dashboard</h1>
                    <a href="/logout" className="btn btn-lg btn-danger">Log Out</a>
                </div>
            )
        }else{
            return(
                // <Redirect exact from="/dasboard" to="/"/>
                <h1>Error</h1>
            )
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Dashboard);