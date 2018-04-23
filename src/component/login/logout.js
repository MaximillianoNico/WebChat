import React, {Component} from 'react';

class logout extends Component{

    componentDidMount(){
        console.log("Running.....");
        window.firebase.auth().signOut().then(s=>{
            window.location.href("/");
        }).catch(function(e){
            alert("error");
        })
    }

    render(){
        return(
            <h1>"Logging Out"</h1>
        )
    }
}
export default logout;