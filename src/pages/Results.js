/** @format */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {youtube} from '../axios';
import loadingGif from '../components/utils/loading.gif';
import ReactImg from '../components/utils/ReactImg';
import './Results.css';

const Results = () => {
	const [Data, setData] = useState([]);
	const nextPageToken = useRef('');
	const dispatch = useDispatch();
	const yTReducer = useSelector(state => state.yTReducer);
	const [params] = useSearchParams();
	const [loading, setloading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const search = params.get('search_query');
			dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 10});
			const response = await youtube.get('/search', {
				params: {
					q: search,
					maxResults: 10,
				},
			});
			dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 60});
			console.log(response.data);
			setData(response.data.items);
			dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 90});
			setTimeout(() => {
				dispatch({type: 'SET_TOP_LOADING_PROGRESS', payload: 100});
			}, 10);
			nextPageToken.current = response.data.nextPageToken;
			// const _optionalData = yTReducer.searchResults[search];
			// if (_optionalData !== undefined) {
			// 	setData(_optionalData);
			// 	return;
			// }
			// const response = await axios.get(`/api/youtube/search?query=${search}`);
			// const _data = response.data;
			// if (_data.success) {
			// 	setData(_data.data.items);
			// 	setNextPageDetails(_data.data.nextPage);
			// 	// dispatch({type: actions.ADD_SEARCH_RESULT, payload: {search, data: _data.items}});
			// }
			setloading(false);
		};

		getData();
	}, [dispatch, params]);
	const getMoreData = useCallback(async () => {
		setloading(true);
		const search = params.get('search_query');
		const response = await youtube.get('/search', {
			params: {
				q: search,
				maxResults: 10,
				pageToken: nextPageToken.current,
			},
		});
		console.log(response.data);
		setData([...Data, ...response.data.items]);
		setloading(false);
	}, [Data, params]);
	return (
		<div className='results-container'>
			<InfiniteScroll hasMore={true} dataLength={Data.length} next={getMoreData} loader={<img src={loadingGif} alt='' />}>
				{Data.map((item, index) => {
					console.log(typeof item.id.kind);
					if (item.id.kind.indexOf('channel') !== -1) return <Channel key={index} data={item} />;
					if (item.id.kind.indexOf('playlist') !== -1) return <Playlist key={index} data={item} />;
					return <Video key={index} data={item} />;
				})}
			</InfiniteScroll>
			{/* {loading && <img src={loadingGif} alt='' />}
			<button onClick={getMoreData}>Load More Data...</button> */}
		</div>
	);
};
const Video = ({data}) => {
	const navigate = useNavigate();
	return (
		<div className='result__item' onClick={() => navigate(`/watch?v=${data.id.videoId}`)}>
			<div className='result__item__img'>
				<ReactImg height={202} width={360} src={data.snippet?.thumbnails?.high?.url} alt='' />
			</div>
			<div className='result__item__content'>
				<h3 className='color-white'>{data.snippet.title}</h3>
				<div className='color-grey'>{data.snippet.channelTitle}</div>
				<h4 className='color-grey'>{data.snippet.description}</h4>
			</div>
		</div>
	);
};
const Channel = ({data}) => (
	<div className='channel'>
		<div>
			<ReactImg className='channel__item__img' src={data.snippet.thumbnails.default.url} alt='' />
		</div>
		<div className='channel__item__content'>
			<div className='color-white'>{data.snippet.channelTitle}</div>
		</div>
	</div>
);
const Playlist = ({data}) => (
	<div className='channel'>
		<div>
			<ReactImg className='channel__item__img' src={data.snippet.thumbnails.default.url} alt='' />
		</div>
		<div className='channel__item__content'>
			<div className='color-white'>{data.snippet.title}</div>
			<div className='color-white'>playlist</div>
		</div>
	</div>
);
export default Results;
