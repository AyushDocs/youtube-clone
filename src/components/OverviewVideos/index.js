/** @format */

import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from '../../axios';
import ReactImg from '../utils/ReactImg';
import './OverviewVideos.css';
const Index = props => {
	const [Data, setData] = useState(props.json);
	const yTReducer = useSelector(state => state.yTReducer);
	useEffect(() => {
		const getData = async () => {
			const data = yTReducer.viewedData;
			if (JSON.stringify(data) !== JSON.stringify([])) {
				setData(data);
				return;
			}
			const res = await axios.get('/api/yt/');
			setData(res.data);
		};
		getData();
	}, [yTReducer.viewedData]);
	return (
		<div className='home-overview-videos-container'>
			{/* //imgUrl, creatorImg,name,subsriberName, views,time */}
			{Data.map((item, index) => (
				<Card key={index} {...item} videoImg={item.thumbnail.thumbnails[0].url} />
			))}
		</div>
	);
};
const Card = ({videoImg, creatorImg, title, channel, views, published, id}) => {
	const navigate = useNavigate();
	return (
		<div className='video-card' onClick={() => navigate(`/watch?v=${id}`)}>
			<div className=''>
				<ReactImg height={200} width={200} src={videoImg} alt='' />
			</div>
			<div className='card__details'>
				<ReactImg className='rounded card__img' src={creatorImg} alt='' />
				<div className=''>
					<h4 className='capitalize '>{title}</h4>
					<div className='text-grey'>{channel}</div>
				</div>
			</div>
		</div>
	);
};
export default Index;
