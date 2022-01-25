/** @format */

import axios from 'axios';

const express = axios.create({baseURL: 'http://localhost:3001'});

export default express;

export const youtube = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: process.env.REACT_APP_API_KEY,
	},
	headers: {},
});
