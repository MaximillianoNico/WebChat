import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class Dashboard extends Component{
    render(){
        if(this.props.user!= null){
            return(
                <div>
                    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                        <div className="navbar-brand col-3 mr-0">
                            <div style={{float:'left'}}>
                                <i class="fas fa-user-circle" style={{fontSize:40,padding:10}}></i>
                            </div>
                            <div className="" style={{float:'right'}}>
                                <i class="far fa-comments" style={{fontSize:25,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}></i>
                                <a href="/logout"><i class="fas fa-sign-out-alt"style={{fontSize:25,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}></i></a>
                            </div>
                        </div>
                        <div className="bg-light"></div>
                        
                    </nav>
                    <div className="container-fluid" style={{marginTop:69}}>
                        <div className="row">
                            <nav className="col-3 d-none d-md-block bg-light sidebar">
                                <div className="container-fluid">
                                    {/*....  */}
                                </div>
                            </nav>
                            <main className="col-9 col-md-9 ml-sm-auto col-lg-9 px-4" style={{padding:10}}>
                                <h1>Content</h1>
                            </main>
                        </div>
                    </div>
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