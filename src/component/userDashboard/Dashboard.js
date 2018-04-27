import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase';
import './src/style.scss';
import action from '../src/action';
// import BoxChat from './BoxChat';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            uid:'',
            name:'',
            totalChat:[],
            userMessenger:[],
            contentChat:[],
            userChat:[],
            idChat:'',
            currentUserChat:''
        }
        this.setIdChat = this.setIdChat.bind(this);
    }

    componentDidMount(){
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){           
                this.setState({
                    uid:user.uid
                })
                this.OnStateAuth();
                alert("Welcome to WebChat");

                var dbUser = firebase.database().ref(`user/${this.props.uid}/`);
                dbUser.on('value', snapshot =>{
                    this.setState({
                        userMessenger:snapshot.val(),
                        totalChat:snapshot.val().chat
                    });
                })
                
            }else{
                alert("Please Sign In before use WebChat");
                window.location.href('/');
            }
        })
        
        
    }
    componentWillUpdate(){
        
    }
    getDBChatting(){
        this.state.totalChat.map((value,id)=>{
            console.log("Chatting : "+value._idMessenger);
        })
    }
    getUserChatting= (name) =>{
        return name
    }
    OnStateAuth(){
        this.props.dispatch(
            action.OnAuthState(this.state.uid)
        )
    }
    setIdChat(id){
        this.setState({
            idChat:id
        })
        // alert(id);
        var getChat = firebase.database().ref(`messenger/${id}/`);
        getChat.on('value',snapshot=>{
            // console.log(snapshot.val().chat)
            this.setState({
                contentChat:snapshot.val().chat
            })
        })
        // this.props.dispatch(
        //     action.getDbChatting(id)
        // )
        console.log(this.state.idChat)
        if(this.state.idChat===null){
            alert("Error")
        }
    }
    // RequestChatContent(){
    //     this.props.dispatch(
    //         action.getDbChatting(this.state.idChat)
    //     )
    // }
    
    render(){
        if(this.props.user!= null){
            console.log(this.state.userMessenger.email);
            const chating = this.state.contentChat.map((chat,id)=>{
                console.log("User : "+chat._idUser+"\nchat : "+chat.content);
                if(this.props.uid===chat._idUser){
                    var stylesIcons = "fas fa-user-circle displayNone";
                    var stylesChatBox = "col-6 jumbotron BoxChatRight";
                    console.log("Equals UID");
                }else{
                    var stylesIcons = "fas fa-user-circle";
                    var stylesChatBox = "col-6 jumbotron";
                    // const current = chat.name;
                    this.getUserChatting(chat.name)
                    // alert(this.state.currentUserChat)
                }
                return (
                    <div className="container">
                                    <div className="row">
                                        <div className="col-12 row">
                                            <i className={stylesIcons} style={{fontSize:30,paddingTop:5,paddingRight:15}}></i>
                                            <div className={stylesChatBox} style={{padding:15}}>
                                                <p>{chat.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                )
            })
            const dataUsers = this.state.totalChat.map((value,id)=>{
                // console.log("Chatting : "+value._idMessenger+"\nGroupName : "+value.groupName);
                return (<li className="nav-item">
                        <a className="nav-link active " href="#" 
                            onClick={
                                () =>{
                                    this.setIdChat(value._idMessenger)
                                } 
                            }
                                >
                            <div className="row" style={{paddingTop:15,paddingBottom:0}}>
                                <i className="fas fa-user-circle" style={{fontSize:50,padding:3}}></i>
                                <div className="col-8">
                                    <h5>{value.groupName}</h5> <span className="sr-only">(current)</span>
                                    <p>lorem</p>
                                </div>
                            </div>
                        </a>
                        <hr style={{margin:0}}/>
                    </li>)
                        
                
                var chatDb = firebase.database().ref(`messenger/${value._idMessenger}/`);
                chatDb.on('value',snapshot=>{
                    snapshot.val().user.map((users,key)=>{
                        // if(key>=0){
                        console.log(users.userName);
                        
                        // }else{
                            // alert("Error Display data")
                        // }
                    })
                })
            })
            return(
                <div>
                    <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
                        <div className="navbar-brand col-1 mr-0 bg-dark" style={{}}>
                        <i class="fas fa-user-circle" style={{fontSize:60,padding:9}}></i>
                        </div>
                        <div className="navbar-brand col-3 mr-0 bg-grey">
                            <div className="row" style={{color:'black'}}>
                                <div className="container-fluid" style={{padding:20}}>
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
                                    <h2>{this.getUserChatting()}</h2>
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
                                    <div className="sidebar-sticky">
                                        <ul className="nav flex-column">
                                            {dataUsers}
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                            <main className="col-8 col-md-8 ml-sm-auto col-lg-8 px-4" style={{padding:10,overflowY:'scroll',overflowX:'hidden',height:'90vh'}} role="main">
                            <div className="container-fluid" style={{marginTop:100,padding:0}}>
                                
                                {chating}
                                
                                <div className="container" style={{position:"fixed",bottom:10}}>
                                    <center className="row">
                                        <center className="col-12 row">
                                            <button className="btn btn-lg btn-cycle btn-success" style={{textAlign:'center'}}>
                                                <i className="fas fa-plus" style={{fontSize:24,marginLeft:-7}}></i>
                                            </button>
                                            <input className="col-9 form-control form-chat" placeholder="Chatting..."></input>
                                            <button className="btn btn-lg btn-cycle btn-info" style={{textAlign:'center'}}>
                                                <i className="fab fa-telegram-plane" style={{fontSize:24,marginLeft:-7}}></i>
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
        user:state.user,
        uid:state.uid,
        chat:state.chat
    }
}
export default connect(mapStateToProps)(Dashboard);