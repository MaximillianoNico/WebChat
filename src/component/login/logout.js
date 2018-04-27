import React, {Component} from 'react';

class logout extends Component{

    componentDidMount(){
        console.log("Running.....");
        window.firebase.auth().signOut().then(s=>{
            window.location.assign("/");
        }).catch(function(e){
            alert("error");
        })
    }

    render(){
        return(
            <center className="container" style={{marginTop:'50vh'}}>
            <h1>"Logging Out"</h1>
            </center>
        )
    }
}
export default logout;