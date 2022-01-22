import actions from '../actions.json'
const initialState = {
	name: JSON.parse(localStorage.getItem('auth'))?.name||undefined,
	imgUrl: JSON.parse(localStorage.getItem('auth'))?.imgUrl || undefined,
	email: JSON.parse(localStorage.getItem('auth'))?.email || undefined,
	isLoggedIn: JSON.parse(localStorage.getItem('auth'))?.isLoggedIn || false,
};

const userReducer=(state=initialState,action) =>{
    switch(action.type){
        case actions.SET_USER_DETAILS:
            localStorage.setItem('auth',JSON.stringify(action.payload));
            return action.payload
        default:return state
    }
}
export default userReducer