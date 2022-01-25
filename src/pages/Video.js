/** @format */

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import moment from 'moment';
import numeral from 'numeral';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {youtube} from '../axios';
import loadingGif from '../components/utils/loading.gif';
import actions from '../redux/actions.json';
import './Video.css';
const Video = () => {
	const [params] = useSearchParams();
	const [Data, setData] = useState({});
	const [RecommendedVideos, setRecommendedVideos] = useState({items: []});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({type: actions.SET_SHOW_SIDEBAR, payload: false});
	}, [dispatch]);
	useEffect(() => {
		const getData = async () => {
			const response = await youtube.get('/videos?part=snippet%2CcontentDetails%2Cstatistics', {params: {id: params.get('v')}});
			console.log(response.data.items[0]);
			setData(response.data.items[0]);
		};
		getData();
	}, [params]);
	useEffect(() => {
		const getData = async () => {
			const response = await youtube.get('/search', {
				params: {
					relatedToVideoId: params.get('v'),
					maxResults: 15,
					type: 'video',
				},
			});
			console.log(response.data);
			setRecommendedVideos(response.data);
		};
		getData();
	}, [params]);
	const fetchMoreData = async () => {
		const response = await youtube.get('/search', {
			params: {
				relatedToVideoId: params.get('v'),
				maxResults: 15,
				type: 'video',
				pageToken: RecommendedVideos.nextPageToken,
			},
		});
		console.log(response.data);
		setRecommendedVideos({...response.data, items: [...RecommendedVideos.items, ...response.data.items]});
	};
	useEffect(() => {
		console.log(RecommendedVideos);
	}, [RecommendedVideos]);

	return (
		<div className='video-page'>
			<div className='video-container'>
				<iframe
					className='iframe'
					src={`https://www.youtube.com/embed/${params.get('v')}`}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
				<div className='video__title'>{Data?.snippet?.localized?.title}</div>
				<div className='video__statistics'>
					<span>{numeral(Data?.statistics?.viewCount).format('0.a')} views •</span>
					<span>{Data?.snippet?.publishedAt}</span>
					<div className='video__actions'>
						<Action logo={ThumbUpAltSharpIcon} name={numeral(Data?.statistics?.likeCount).format('0.a')} />
						<Action logo={ThumbDownAltSharpIcon} name='Dislike' />
						<Action logo={ShareTwoToneIcon} name='Share' />
						<Action logo={SaveAltIcon} name='Save' />
						<Action logo={MoreHorizIcon} name='' />
					</div>
				</div>
				<div className='color-grey'>
					<div>{Data?.statistics?.commentCount} Subscribers</div>
					<div style={{whiteSpace: 'pre-line'}} className='color-white'>
						{Data?.snippet?.localized?.description}
					</div>
				</div>
			</div>
			<div className='recommended-videos'>
				<InfiniteScroll next={fetchMoreData} dataLength={RecommendedVideos.items.length} hasMore={true} loader={<img src={loadingGif} alt='' />}>
					{RecommendedVideos?.items?.map?.((item, index) => (
						<RecommendedVideo key={index} data={item} />
					))}
				</InfiniteScroll>
			</div>
		</div>
	);
};
const Action = props => (
	<abbr title={props.name}>
		<div className='video__action__item'>
			<props.logo /> {props.name}
		</div>
	</abbr>
);

const RecommendedVideo = ({data}) => {
	return (
		<div className='recommended-video'>
			<img src={data?.snippet?.thumbnails?.default?.url} alt='' />
			<div>
				<div className='color-white'>{data?.snippet?.title}</div>
				<div className='color-grey'>{data?.snippet?.channelTitle}</div>
				<div className='text-grey'>{moment(data?.snippet?.publishedAt).fromNow()}</div>
			</div>
		</div>
	);
};

export default Video;
