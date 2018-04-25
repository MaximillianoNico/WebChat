let defaultState={
    user:null,
    uid:""
}
const reducers = (state = defaultState, action)=>{
    switch(action.type){
        case "SET_LOGIN_ERROR":
            return Object.assign({},state,{
                loginError:action.payload
            })
        case "SET_USER":
            return Object.assign({},state,{
                user:action.payload
            })
        case "SET_UID":
            return Object.assign({},state,{
                uid:action.payload
            })
        default:
            return state;
    }
}
export default reducers