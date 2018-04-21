// import action from "./component/login/src/action";

let defaultState={
    user:null,
}
const reducers = (state = defaultState, action)=>{
    switch(action.type){
        case "SET_LOGIN_ERROR":
            return Object.assign({},state,{
                loginError:action.payload
            }) 
    }
}