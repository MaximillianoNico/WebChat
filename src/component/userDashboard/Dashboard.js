import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class Dashboard extends Component{
    render(){
        if(this.props.user!= null){
            return(
                <div>
                    <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
                        <div className="navbar-brand col-3 mr-0 bg-dark">
                            <div style={{float:'left'}}>
                                <i class="fas fa-user-circle" style={{fontSize:40,padding:10}}></i>
                            </div>
                            <div className="" style={{float:'right'}}>
                                <i class="far fa-comments" style={{fontSize:25,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}></i>
                                <a href="/logout"><i class="fas fa-sign-out-alt"style={{fontSize:25,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}></i></a>
                            </div>
                        </div>
                        <div className="navbar-nav w-100" style={{paddingLeft:20}}>
                            <h3>Title</h3>
                        </div>
                    </nav>
                    <div className="container-fluid" style={{marginTop:69}}>
                        <div className="row">
                            <nav className="col-3 d-none d-md-block bg-light sidebar scrollbar" style={{overflowY:'scroll',height:'90vh'}}>
                                <div className="container-fluid sidebar-sticky">
                                    {/* <h1>Menu</h1> */}
                                    <div class="sidebar-sticky">
                                        <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-home" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 3 9 l 9 -7 l 9 7 v 11 a 2 2 0 0 1 -2 2 H 5 a 2 2 0 0 1 -2 -2 Z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>
                                            Dashboard <span class="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-file" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 13 2 H 6 a 2 2 0 0 0 -2 2 v 16 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 9 Z" /><polyline points="13,2 13,9 20,9" /></svg>
                                            Orders
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-shopping-cart" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M 1 1 h 4 l 2.68 13.39 a 2 2 0 0 0 2 1.61 h 9.72 a 2 2 0 0 0 2 -1.61 L 23 6 H 6" /></svg>
                                            Products
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-users" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><path d="M 17 21 v -2 a 4 4 0 0 0 -4 -4 H 5 a 4 4 0 0 0 -4 4 v 2" /><circle cx="9" cy="7" r="4" /><path d="M 23 21 v -2 a 4 4 0 0 0 -3 -3.87" /><path d="M 16 3.13 a 4 4 0 0 1 0 7.75" /></svg>
                                            Customers
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-bar-chart-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                            Reports
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-layers" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><polygon points="12,2 2,7 12,12 22,7 12,2" /><polyline points="2,17 12,22 22,17" /><polyline points="2,12 12,17 22,12" /></svg>
                                            Integrations
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
                            <main className="col-9 col-md-9 ml-sm-auto col-lg-9 px-4" style={{padding:10}} role="main">
                                <h1>Content</h1>
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