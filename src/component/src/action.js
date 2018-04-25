import firebase from 'firebase';
import React, {Component} from 'react';

export default{
    setLoginError(errorText){
        return {
            type:"SET_LOGIN_ERROR",
            payload:errorText
        }
    },
    setUser(user){
        return{
            type:"SET_USER",
            payload:user
        }
    },
    setUID(uid){
        return{
            type:"SET_UID",
            payload:uid
        }
    },
    AuthenticationFirebase(email,password){
        return (dispatch)=>{
           return window.firebase.auth().signInWithEmailAndPassword(email,password)
           .then(res =>{
               alert("Success");
               return (
                   dispatch(this.setUser(res.data)),
                    window.location.href("/dashboard")
               )
           })
           .catch(err=>{
               alert(err);
               return(
                   dispatch(this.setLoginError("Wrong Email or Password"))
               )
           })
        }
    },
    OnAuthState(uid){
        return (dispatch)=>{
            return dispatch(this.setUID(uid))
            }
        }
    }
    
