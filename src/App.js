/** @format */

import {useDispatch, useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import Loading from 'react-top-loading-bar';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Results from './pages/Results';
import Video from './pages/Video';
const App = () => {
	const userReducer = useSelector(state => state.userReducer);
	const progress = useSelector(state => state.visibilityReducer.topLoaderProgress);
	const dispatch = useDispatch();
	if (!userReducer.isLoggedIn) return <Login />;
	return (
		<div className='app'>
			<Loading progress={progress} onLoaderFinished={() => dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 0})} />
			<Header />

			<div style={{display: 'flex'}} className=''>
				<Sidebar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/results' element={<Results />} />
					<Route path='/watch' element={<Video />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
