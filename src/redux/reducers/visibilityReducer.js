/** @format */

import actions from '../actions.json';
const initialState = {
	showSidebar: true,
	topLoaderProgress: 0,
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_SHOW_SIDEBAR:
			return {...state, showSidebar: action.payload};
		case 'SET_TOP_LOADING_PROGRESS':
			return {...state, topLoaderProgress: action.payload};
		default:
			return state;
	}
};
export default reducer;
