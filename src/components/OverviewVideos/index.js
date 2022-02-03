/** @format */

import moment from 'moment';
import numeral from 'numeral';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {youtube} from '../../axios';
import loadingGif from '../utils/loading.gif';
import ReactImg from '../utils/ReactImg';
import './OverviewVideos.css';
const Index = props => {
	const [Data, setData] = useState({items: []});
	const [loading, setloading] = useState(true);
	const dispatch = useDispatch();
	const yTReducer = useSelector(state => state.yTReducer);
	useEffect(() => {
		const getData = async () => {
			const data = yTReducer.viewedData;
			if (JSON.stringify(data) !== JSON.stringify([])) {
				setData(data);
				return;
			}
			dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 10});
			const response = await youtube.get('/videos?part=snippet,contentDetails,statistics', {
				params: {
					chart: 'mostPopular',
					regionCode: 'IN',
					maxResults: 8,
				},
			});
			dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 50});
			console.log(response.data);
			setData(response.data);
			dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 100});
			setloading(false);
		};
		getData();
	}, [dispatch, yTReducer.viewedData]);
	const getMoreData = async () => {
		setloading(true);
		const response = await youtube.get('/videos?part=snippet,contentDetails,statistics', {
			params: {
				chart: 'mostPopular',
				regionCode: 'IN',
				maxResults: 8,
				pageToken: Data.nextPageToken,
			},
		});
		console.log(response.data);
		setData({...Data, nextPageToken: response.data.nextPageToken, items: [...Data.items, ...response.data.items]});
		setloading(false);
	};
	return (
		<>
			{/* <HeaderTags /> */}
			<InfiniteScroll className='grid' dataLength={Data.items.length} next={getMoreData} loader={<img src={loadingGif} alt='' />} hasMore={true} isLoading={loading}>
				{Data.items.map(item => (
					<div key={item.id}>
						<Card data={item} videoImg={item?.snippet?.thumbnails?.high?.url} />
					</div>
				))}
			</InfiniteScroll>
			{/* <button onClick={getMoreData}>Load more data...</button> */}
		</>
	);
};
const Card = props => {
	const [ChannelData, setChannelData] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		youtube.get('/channels', {params: {id: props.data.snippet.channelId}}).then(res => {
			console.log(res.data.items[0].snippet.thumbnails);
			setChannelData(res.data);
		});
	}, [props.data.snippet.channelId]);

	return (
		<div className='video-card' onClick={() => navigate(`/watch?v=${props.data.id}`)}>
			<ImageContainer className=''>
				<ReactImg className='card__img' src={props?.videoImg} alt='' />
				<Time>{moment.utc(moment.duration(props.data.contentDetails.duration).asSeconds() * 1000).format('mm:ss')}</Time>
			</ImageContainer>

			<div className='card__details'>
				<ReactImg className='rounded ' src={ChannelData?.items[0]?.snippet?.thumbnails?.default?.url} alt='' />
				<div className='card__details__text'>
					<h4 className='card__title capitalize '>{props?.data?.snippet?.title}</h4>
					<div className=' card__channel__title text-grey'>{props?.data?.snippet?.channelTitle}</div>
					<span className='text-grey'>{numeral(props.data.statistics.viewCount).format('0.a')} views • </span>
					<span className='text-grey'>{moment(props.data.snippet.publishedAt).fromNow()}</span>
				</div>
			</div>
		</div>
	);
};
const Time = styled.div`
	position: absolute;
	bottom: 0.3rem;
	right: 0.3rem;
	width: fit-content;
	background-color: black;
	color: white;
	border-radius: 2px;
`;
const ImageContainer = styled.div`
	position: relative;
`;
export default Index;
