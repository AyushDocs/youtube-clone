/** @format */

import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions.json'
import axios from '../../axios';
const Index = () => {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const dispatch = useDispatch()
	const handleLogin = async googleData => {
		const res = await axios.post('/api/auth/google', {idToken: googleData.tokenId});
		const body = res.data.data;
        const payload = {name: body.name, imgUrl: body.picture, email: body.email, isLoggedIn: true};
        dispatch({type:actions.SET_USER_DETAILS,payload})
	};
	return (
		<div>
			<GoogleLogin clientId={clientId} handleLogin={handleLogin} buttonText='Log in with Google' onSuccess={handleLogin} onFailure={handleLogin} cookiePolicy='single_host_origin' />
		</div>
	);
};

export default Index;
