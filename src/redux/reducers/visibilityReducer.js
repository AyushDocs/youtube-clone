import actions from '../actions.json'
const initialState ={
    showSidebar: true
}
const reducer=(state= initialState,action)=>{
    switch(action.type){
        case actions.SET_SHOW_SIDEBAR:return {...state,showSidebar:action.payload}
        default:return state
    }
}
export default reducer