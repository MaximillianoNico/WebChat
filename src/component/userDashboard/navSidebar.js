import React,{Component} from 'react';
import firebase from 'firebase';

class navSidebar extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <nav className="col-1 d-none d-md-block bg-dark sidebar scrollbar">
                <div className="container-fluid sidebar-sticky" style={{marginTop:150}}>
                    <a href="" className="icons-nav">
                        <i class="fas fa-comment" style={{fontSize:45,paddingTop:20}}></i>
                    </a>
                    <a href="" className="icons-nav">
                        <i class="fas fa-users" style={{fontSize:45,paddingTop:20}}></i>
                    </a>
                    <a href="" className="icons-nav">
                        <i class="fas fa-newspaper" style={{fontSize:45,paddingTop:20}}></i>
                    </a>
                    <a href="/logout" className="icons-nav">
                        <i class="fas fa-sign-out-alt" style={{fontSize:45,paddingTop:20}}></i>
                    </a>
                </div>
            </nav>
        )
    }
}
export default navSidebar;