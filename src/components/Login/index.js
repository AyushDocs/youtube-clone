/** @format */

import React from 'react';
import GoogleLogin from 'react-google-login';
import {useDispatch} from 'react-redux';
import actions from '../../redux/actions.json';
const Index = () => {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	const dispatch = useDispatch();
	const handleLogin = async googleData => {
		console.log(googleData);
		const payload = {name: googleData.profileObj.givenName, imgUrl: googleData.profileObj.imageUrl, email: googleData.profileObj.email, isLoggedIn: true, access_token: googleData.accessToken};
		console.log('paylosd => ' + JSON.stringify(payload));
		dispatch({type: actions.SET_USER_DETAILS, payload});
	};
	return (
		<div>
			<GoogleLogin clientId={clientId} handleLogin={handleLogin} buttonText='Log in with Google' onSuccess={handleLogin} onFailure={handleLogin} cookiePolicy='single_host_origin' />
			{/* <a href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly`}>google</a> */}
		</div>
	);
};
//access_token=ya29.A0ARrdaM92UaO7xZicSRcx9yhlZfPI6wpZRHi5PQ8oHfqx7G0NSduxuO0z5ulFIrGF_zRUN_T1fkJbQJ72HopSxY0kr-GymVm7GPqcGgQO4nAUCFycoVy74UYEc5KPCDLZFNAOfQ7AjGS6KWziii8kyNxpePRz&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/youtube.readonly
export default Index;
