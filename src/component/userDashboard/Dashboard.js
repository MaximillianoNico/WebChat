import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase';
import './src/style.scss';
import action from '../src/action';

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
            idChat:[],
            currentUserChat:''
        }
        this.setIdChat = this.setIdChat.bind(this);
    }

    componentDidMount(){
        
        var messaging = firebase.messaging();
        messaging.requestPermission().then(function(){
            alert('Notification Permisson Grated')
        }).catch(function(err){
            alert('Enable to get permission to notify'+err)
        })
        messaging.onTokenRefresh(function(){
            messaging.getToken().then(function(refreshedToken){
                alert(refreshedToken);
            })
        })
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){           
                this.setState({
                    uid:user.uid
                })
                this.OnStateAuth();
                // this.setIdChat();
                alert("Welcome to WebChat");

                var dbUser = firebase.database().ref(`user/${this.props.uid}/`);
                dbUser.on('value', snapshot =>{
                    this.setState({
                        userMessenger:snapshot.val(),
                        totalChat:snapshot.val().chat,
                        name:snapshot.val().name
                    });
                })
                
            }else{
                alert("Please Sign In before use WebChat");
                window.location.assign('/');
            }
        })
        
        
    }
    OnStateAuth(){
        this.props.dispatch(
            action.OnAuthState(this.state.uid)
        )
    }
    setIdChat=(id)=>{
        this.setState({
            idChat:id
        })
        
        var getChat = firebase.database().ref(`messenger/${id}/`);
        getChat.on('value',snapshot=>{
            this.setState({
                contentChat:snapshot.val().chat
            })
        })
    }
    postMessage = (e) =>{
        e.preventDefault();

        let messege = e.target.inputChat.value;
        
        var addChat = firebase.database().ref(`messenger/${this.state.idChat}/chat/${this.state.contentChat.length}`)
        addChat.set({
            _idUser:this.state.uid,
            content:messege,
            name:this.state.name,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`
        })
        var messaging = firebase.messaging();
    }
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
                        console.log(users.userName);
                        
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
                                    <h2></h2>
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
                                
                                <form className="container" style={{position:"fixed",bottom:10}} onSubmit={this.postMessage}>
                                    <center className="row">
                                        <center className="col-12 row">
                                            <button className="btn btn-lg btn-cycle btn-success" style={{textAlign:'center'}}>
                                                <i className="fas fa-plus" style={{fontSize:24,marginLeft:-7}}></i>
                                            </button>
                                            <input id="inputChat"className="col-8 form-control form-chat" placeholder="Chatting..."></input>
                                            <button type="submit" className="btn btn-lg btn-cycle btn-info" style={{textAlign:'center'}}>
                                                <i className="fab fa-telegram-plane" style={{fontSize:24,marginLeft:-7}}></i>
                                            </button>
                                        </center>
                                    </center>
                                </form>
                            </div>
                            </main>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
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