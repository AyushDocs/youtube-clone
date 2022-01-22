/** @format */

import actions from '../actions.json';
const initialState = {
	viewedData: JSON.parse(window.localStorage.getItem('yt-viewed')) || [],
	searchResults: JSON.parse(window.localStorage.getItem('yt-search')) || [],
};
const yTReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_VIDEOS_TO_WATCHED: {
			console.log('in hrr');
			const arr = state.viewedData;
			arr[action.payload.title] = action.payload;
			window.localStorage.setItem('yt-viewed', JSON.stringify(arr));
			return {...state, viewedData: arr};
		}
		case actions.REMOVE_VIDEOS_FROM_WATCHED: {
			const arr = state.viewedData;
			delete arr[action.payload.title];
			window.localStorage.setItem('yt-viewed', JSON.stringify(arr));
			return {...state, viewedData: arr};
		}
		case actions.ADD_SEARCH_RESULT: {
			console.log('in hjrr');

			const arr = state.searchResults;

			if (arr.indexOf({search: action.payload.search, data: action.payload}) === -1) {
				arr.push({search: action.payload.search, data: action.payload});
				window.localStorage.setItem('yt-search', JSON.stringify(arr));
				return {...state, searchResults: arr};
			}

			return state;
		}
		default:
			return state;
	}
};
export default yTReducer;
