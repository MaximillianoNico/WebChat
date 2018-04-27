import React,{Component} from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';

class BoxChat extends Component{
    constructor(){
        super();
        this.state={
            dataChat:[]
        }
    }
    componentDidMount(){
        alert(this.props.chat)
        firebase.database().ref(`messenger/${this.props.chat}`).on('value', snapshot=>{
            console.log(snapshot.val());
            // this.setState({
            //     dataChat:snapshot.val().chat
            // })
        })
    }
    render(){
        return(
            <div className="container-fluid" style={{marginTop:100,padding:0}}>
                                
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 row">
                                                <i className="fas fa-user-circle" style={{fontSize:30,paddingTop:5,paddingRight:15}}></i>
                                                <div className="col-6 jumbotron" style={{padding:15}}>
                                                    <p>Hello, How are you?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 row">
                                                {/* <i className="fas fa-user-circle" style={{fontSize:30,paddingTop:5,paddingRight:15}}></i> */}
                                                <div className="col-6 jumbotron" style={{padding:15,marginRight:0,left:'50%'}}>
                                                    <p>I'm fine. I heard you've become a developer, maybe we could work creating a startup?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 row">
                                                <i className="fas fa-user-circle" style={{fontSize:30,paddingTop:5,paddingRight:15}}></i>
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
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        chat:state.chat
    }
}
export default BoxChat;