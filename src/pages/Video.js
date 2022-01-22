/** @format */

import React, {useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import axios from '../axios';
import './Video.css';
const Video = () => {
	const [params, setParams] = useSearchParams();
	const videoRef = useRef(null);
	useEffect(() => {
		const getData = async () => {
            // if(vid)
			const videoId = params.get('v');
			const res = await axios.get(`api/video/${videoId}`);
			const iframe = res.data.items[0].player.embedHtml;
            videoRef.current.innerHTML = iframe;
            debugger
		};
		getData();
	}, [params]);
	return (
		<div className='video-page'>
			<div ref={videoRef}>

			</div>
		</div>
	);
};

export default Video;
