import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './src/style.scss';
class Dashboard extends Component{
    render(){
        if(this.props.user!= null){
            return(
                <div>
                    <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
                        <div className="navbar-brand col-1 mr-0 bg-dark" style={{}}>
                        <i class="fas fa-user-circle" style={{fontSize:60,padding:9}}></i>
                        </div>
                        <div className="navbar-brand col-3 mr-0 bg-grey">
                            <div className="row" style={{color:'black',float:'left'}}>
                                <div className="" style={{padding:20}}>
                                    <form class="form-inline row col-12" style={{margin:0,padding:0}}>
                                        <input class="form-control col-10" type="search" placeholder="Search" aria-label="Search"/>
                                        <button class="btn btn-xs btn-outline-success col-2 my-2 my-sm-0" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-nav w-100" style={{paddingLeft:20}}>
                            <div className="row">
                                <div className="col-1">
                                    <i class="fas fa-user-circle" style={{fontSize:60,paddingTop:5}}></i>
                                </div>
                                <div className="col-11" style={{paddingTop:4}}>
                                    <h2>Jhon Doe</h2>
                                    <p style={{margin:0}}>lorem</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid" style={{marginTop:69}}>
                        <div className="row">
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
                            <nav className="col-3 d-none d-md-block bg-grey sidebar scrollbar" style={{overflowY:'scroll',height:'90vh'}}>
                                <div className="container-fluid sidebar-sticky">
                                    {/* <h1>Menu</h1> */}
                                    <nav class="navbar navbar-light bg-ligth" style={{margin:0,paddingTop:13}}>
                                        </nav>
                                    <div class="sidebar-sticky">
                                        
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Jhon Doe</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Rachel</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Angela</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Andre</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Steve</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Emilia</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active " href="#">
                                                    <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                                        <i class="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                                        <div className="col-8">
                                                            <h5>Angela</h5> <span class="sr-only">(current)</span>
                                                            <p>lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr style={{margin:0}}/>
                                            </li>
                                        </ul>

                                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                        <span>Saved reports</span>
                                        <a class="d-flex align-items-center text-muted" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-plus-circle" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </a>
                                        </h6>
                                        <ul class="nav flex-column mb-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Current month
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Last quarter
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Social engagement
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Year-end sale
                                            </a>
                                        </li>
                                        </ul>

                                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                        <span>Saved reports</span>
                                        <a class="d-flex align-items-center text-muted" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-plus-circle" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </a>
                                        </h6>
                                        <ul class="nav flex-column mb-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Current month
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Last quarter
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Social engagement
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file-text" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 14 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8 Z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
                                            Year-end sale
                                            </a>
                                        </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                            <main className="col-8 col-md-8 ml-sm-auto col-lg-8 px-4" style={{padding:10,overflowY:'scroll',overflowX:'hidden',height:'90vh'}} role="main">
                                <div className="container-fluid" style={{marginTop:100,padding:0}}>
                                
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 row">
                                                <i class="fas fa-user-circle" style={{fontSize:30,paddingTop:5,paddingRight:15}}></i>
                                                <div className="col-6 jumbotron" style={{padding:15}}>
                                                    <p>Hello, How are you?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 row">
                                                {/* <i class="fas fa-user-circle" style={{fontSize:30,paddingTop:5,paddingRight:15}}></i> */}
                                                <div className="col-6 jumbotron" style={{padding:15,marginRight:0,left:'50%'}}>
                                                    <p>I'm fine. I heard you've become a developer, maybe we could work creating a startup?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 row">
                                                <i class="fas fa-user-circle" style={{fontSize:30,paddingTop:5,paddingRight:15}}></i>
                                                <div className="col-6 jumbotron" style={{padding:15}}>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container" style={{position:"fixed",bottom:10}}>
                                        <center className="row">
                                            <center className="col-12 row">
                                                <button className="btn btn-lg btn-cycle btn-success" style={{textAlign:'center'}}>
                                                    <i class="fas fa-plus" style={{fontSize:24,marginLeft:-7}}></i>
                                                </button>
                                                <input className="col-9 form-control form-chat" placeholder="Chatting..."></input>
                                                <button className="btn btn-lg btn-cycle btn-info" style={{textAlign:'center'}}>
                                                    <i class="fab fa-telegram-plane" style={{fontSize:24,marginLeft:-7}}></i>
                                                </button>
                                            </center>
                                        </center>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                // <Redirect exact from="/dasboard" to="/"/>
                <h1></h1>
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