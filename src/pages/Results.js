/** @format */

import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useSearchParams} from 'react-router-dom';
import loadingGif from '../components/utils/loading.gif';
import ReactImg from '../components/utils/ReactImg';
import './Results.css';
const json = {
	success: true,
	data: {
		items: [
			{
				id: 'UCeVMnSShP_Iviwkknt83cww',
				type: 'channel',
				thumbnail: {
					thumbnails: [
						{url: '//yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s88-c-k-c0x00ffffff-no-rj-mo', width: 88, height: 88},
						{url: '//yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s176-c-k-c0x00ffffff-no-rj-mo', width: 176, height: 176},
					],
				},
				title: 'CodeWithHarry',
			},
			{
				id: 'gfDE2a7MKjA',
				type: 'video',
				thumbnail: {
					thumbnails: [
						{url: 'https://i.ytimg.com/vi/gfDE2a7MKjA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDXXtjAQl1jf9NmTGqG3mYwsojq9Q', width: 360, height: 202},
						{url: 'https://i.ytimg.com/vi/gfDE2a7MKjA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCox3WvCvgVZdHFy47-M4nvELtREg', width: 720, height: 404},
					],
				},
				title: 'Python Tutorial For Beginners In Hindi (With Notes) 🔥',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CJQBENwwGAQiEwjFtqebrsP1AhXLstUKHZ6vCPs=',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '11 ساعة، و52 دقيقة، و24 ثانية'}}, simpleText: '11:52:24'},
				isLive: false,
			},
			{
				id: 'HkvyaX12pWY',
				type: 'video',
				thumbnail: {thumbnails: [{url: 'https://i.ytimg.com/vi/HkvyaX12pWY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtnyPeoTap-vNVJQxDNZiI_jKzGA', width: 480, height: 270}]},
				title: 'Code With Harry - Attitude 💥💥 #shorts #codewithharry',
				channelTitle: 'Code With Harry Fan Page',
				shortBylineText: {
					runs: [
						{
							text: 'Code With Harry Fan Page',
							navigationEndpoint: {
								clickTrackingParams: 'CGoQ3DAYBiITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/channel/UCcQfTnTpUVmh60Q9sxYLMBA', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCcQfTnTpUVmh60Q9sxYLMBA', canonicalBaseUrl: '/channel/UCcQfTnTpUVmh60Q9sxYLMBA'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '23 ثانية'}}, simpleText: '0:23'},
				isLive: false,
			},
			{
				id: 'UeM-wAodKlM',
				type: 'video',
				thumbnail: {
					thumbnails: [
						{url: 'https://i.ytimg.com/vi/UeM-wAodKlM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDGPla7kUb_8GKx-wWDpqRq7El4Ow', width: 360, height: 202},
						{url: 'https://i.ytimg.com/vi/UeM-wAodKlM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDdJ7fOy_QZpRhyRhLau4FjwKAYNA', width: 720, height: 404},
					],
				},
				title: 'Facebook Clone in Tailwind CSS: Tailwind Tutorial #14',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CGUQ3DAYCCITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '31 دقيقة و50 ثانية'}}, simpleText: '31:50'},
				isLive: false,
			},
			{
				id: 'MmCg0tWWYNc',
				type: 'video',
				thumbnail: {thumbnails: [{url: 'https://i.ytimg.com/vi/MmCg0tWWYNc/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAp7-zMK8Uiu4LnZIKA1feuv_UesQ', width: 480, height: 270}]},
				title: 'Code With Harry  ANGRY Moments 😡 | Harry Bhai Coding karte karte Ho Gae GUSSA',
				channelTitle: 'Harry Bhai FC',
				shortBylineText: {
					runs: [
						{
							text: 'Harry Bhai FC',
							navigationEndpoint: {
								clickTrackingParams: 'CGAQ3DAYCiITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/HarryBhaiFC', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCIUfoF9fp0p2_ujEFCd3dww', canonicalBaseUrl: '/c/HarryBhaiFC'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: 'دقيقة و43 ثانية'}}, simpleText: '1:43'},
				isLive: false,
			},
			{
				id: 'ZSPZob_1TOk',
				type: 'video',
				thumbnail: {thumbnails: [{url: 'https://i.ytimg.com/vi/ZSPZob_1TOk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLApzHM-NpQ-eiiKj-YJkXkKmXS_xQ', width: 480, height: 270}]},
				title: 'C Language Tutorial For Beginners In Hindi (With Notes) 🔥',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CFwQ3DAYCyITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '15 ساعة، و13 دقيقة، و24 ثانية'}}, simpleText: '15:13:24'},
				isLive: false,
			},
			{
				id: 'BsDoLVMnmZs',
				type: 'video',
				thumbnail: {
					thumbnails: [
						{url: 'https://i.ytimg.com/vi/BsDoLVMnmZs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDlg6IyReurUG7Nnyq-JxxPYvHpUw', width: 360, height: 202},
						{url: 'https://i.ytimg.com/vi/BsDoLVMnmZs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDV_-yxxGw1ExusPB3oE97HoH7Kow', width: 720, height: 404},
					],
				},
				title: 'HTML Tutorial For Beginners In Hindi (With Notes) 🔥',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CFUQ3DAYDyITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '3 ساعات، و11 دقيقة، و12 ثانية'}}, simpleText: '3:11:12'},
				isLive: false,
			},
			{
				id: 'IygPoF9Y5O8',
				type: 'video',
				thumbnail: {
					thumbnails: [
						{url: 'https://i.ytimg.com/vi/IygPoF9Y5O8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBEuKA4KlczpnoNhpR8kQTsAaEi1g', width: 360, height: 202},
						{url: 'https://i.ytimg.com/vi/IygPoF9Y5O8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBvRP6rC0owNfqwhDQBuCGw2Q1U9g', width: 720, height: 404},
					],
				},
				title: 'C Language Tutorial in 9 Minutes (in Hindi) 🔥',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CFEQ3DAYECITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '9 دقائق وثانيتان'}}, simpleText: '9:02'},
				isLive: false,
			},
			{
				id: 'mXjZQX3UzOs',
				type: 'video',
				thumbnail: {
					thumbnails: [
						{url: 'https://i.ytimg.com/vi/mXjZQX3UzOs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC_KiEEzpkpzp_28Q87tXSpYOSuZg', width: 360, height: 202},
						{url: 'https://i.ytimg.com/vi/mXjZQX3UzOs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDm53eQPQVuLXEsNhxz2yrw6l9DUg', width: 720, height: 404},
					],
				},
				title: 'Android Development Tutorial For Beginners In Hindi (With Notes) 🔥',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CE0Q3DAYESITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '11 ساعة، و43 دقيقة، و10 ثوان'}}, simpleText: '11:43:10'},
				isLive: false,
			},
			{
				id: 'GlLRYml8mCY',
				type: 'video',
				thumbnail: {thumbnails: [{url: 'https://i.ytimg.com/vi/GlLRYml8mCY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBGDJHztsw7bDt7NKOivVqU26mvbg', width: 480, height: 270}]},
				title: 'How To Make a WordPress Website | Wordpress Tutorial for Beginners | Elementor Tutorial In Hindi',
				channelTitle: 'CodeWithHarry',
				shortBylineText: {
					runs: [
						{
							text: 'CodeWithHarry',
							navigationEndpoint: {
								clickTrackingParams: 'CEkQ3DAYEiITCMW2p5uuw_UCFcuy1Qodnq8I-w==',
								commandMetadata: {webCommandMetadata: {url: '/c/CodeWithHarry', webPageType: 'WEB_PAGE_TYPE_CHANNEL', rootVe: 3611, apiUrl: '/youtubei/v1/browse'}},
								browseEndpoint: {browseId: 'UCeVMnSShP_Iviwkknt83cww', canonicalBaseUrl: '/c/CodeWithHarry'},
							},
						},
					],
				},
				length: {accessibility: {accessibilityData: {label: '3 ساعات، و11 دقيقة، و18 ثانية'}}, simpleText: '3:11:18'},
				isLive: false,
			},
		],
		nextPage: {
			nextPageToken: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
			nextPageContext: {
				context: {
					client: {
						hl: 'ar',
						gl: 'SA',
						remoteHost: '142.154.126.250',
						deviceMake: '',
						deviceModel: '',
						visitorData: 'CgtPVS1iTVVWUW53dyjA2KuPBg%3D%3D',
						userAgent: 'axios/0.21.4,gzip(gfe)',
						clientName: 'WEB',
						clientVersion: '2.20220119.05.00',
						osName: '',
						osVersion: '',
						originalUrl: 'https://www.youtube.com/results?search_query=CodeWithHarry',
						platform: 'DESKTOP',
						clientFormFactor: 'UNKNOWN_FORM_FACTOR',
						configInfo: {appInstallData: 'CMDYq48GELfLrQUQu8f9EhC9660FEIDqrQUQmOqtBRDzyv0SEI_wrQUQtO-tBRCR-PwSENi-rQU%3D'},
					},
					user: {lockedSafetyMode: false},
					request: {useSsl: true},
					clickTracking: {clickTrackingParams: 'IhMIn+elm67D9QIV0s7VCh1fogPt'},
				},
				continuation:
					'EvYEEg1Db2RlV2l0aEhhcnJ5GuQEU0JTQ0FSaFZRMlZXVFc1VFUyaFFYMGwyYVhkcmEyNTBPRE5qZDNlQ0FTSlFUSFV3VjE4NWJFbEpPV0ZuYVVOVldsbFNjM1owUjFSWVpIaHJlbEI1U1hSbmdnRWlVRXgxTUZkZk9XeEpTVGxoWjNCR1ZVRnNVRVpsWDFaT1UyeFlWelYxUlRCWlRJSUJDMmRtUkVVeVlUZE5TMnBCZ2dFTFNHdDJlV0ZZTVRKd1YxbUNBU0pRVEhVd1YxODViRWxKT1dGblNVTnVWRGgwTkdsWlZsTmFNMlY1YTBsQlQwMUZnZ0VMVldWTkxYZEJiMlJMYkUyQ0FSeFNSRU5OVlVObFZrMXVVMU5vVUY5SmRtbDNhMnR1ZERnelkzZDNnZ0VMVFcxRFp6QjBWMWRaVG1PQ0FRdGFVMUJhYjJKZk1WUlBhNElCSWxCTWRUQlhYemxzU1VrNVlXbFliRWhqVEhndGJVUklNVkYxYkRNNGQwUXpZVktDQVNKUVRIVXdWMTg1YkVsSk9XRm5lRFkyYjFwdVZEWkplV2hqVFVsaVZVMU9UV1IwZ2dFaVVFeDFNRmRmT1d4SlNUbGhaMU0yTjFWcGRITXdWVzVLZVhKWmFWaG9SRk0yY1lJQkMwSnpSRzlNVmsxdWJWcHpnZ0VMU1hsblVHOUdPVmsxVHppQ0FRdHRXR3BhVVZnelZYcFBjNElCQzBkc1RGSlpiV3c0YlVOWmdnRUxTbVJITVdOV1JubHFOVUdDQVF0V1EyeFNia3BEU2xCS1dZSUJDMFZrYzNobVgwNUNSbkozc2dFR0NnUUlGaEFDGIHg6BgiC3NlYXJjaC1mZWVk',
			},
		},
	},
};
const Results = () => {
	const [Data, setData] = useState([]);
	const [NextPageDetails, setNextPageDetails] = useState(null);
	const dispatch = useDispatch();
	const yTReducer = useSelector(state => state.yTReducer);
	const [params] = useSearchParams();
	const [loading, setloading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const search = params.get('search_query');
			const response = await axios.get(`https://googleapis.com/youtube/v3/search?q=${search}&part=snippet&maxResults=5&key=AIzaSyAKrsSZUr8DXtzk99E9RONo9Cx9gL1KeBo`);
			const _data = response.data;
			console.log(_data)
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
	}, [params]);
	const getMoreData = useCallback(async () => {
		setloading(true);
		// const response = await axios.post(`/api/youtube/search/more`, {nextPage: NextPageDetails});
		// if (response.status === 500) return;
		// const _data = response.data;
		// if (!_data.success) return;
		// const {items, nextPage} = _data.data;
		// console.log(_data.data);
		// setData(Data.concat(items));
		// setNextPageDetails(nextPage);
		setloading(false);
	}, []);
	return (
		<div className='results-container'>
			{Data.map((item, index) => {
				if (item.type === 'channel') return <Channel key={index} data={item} />;
				if (item.type === 'playlist') return <Playlist key={index} data={item} />;
				return <Video key={index} data={item} />;
			})}
			{loading && <img src={loadingGif} alt='' />}
			<button onClick={getMoreData}>Load More Data...</button>
		</div>
	);
};
const Video = ({data}) => {
	const navigate = useNavigate();
	return (
		<div className='result__item' onClick={() => navigate(`/watch?v=${data.id}`)}>
			<div className='result__item__img'>
				<ReactImg height={202} width={360} src={data.thumbnail.thumbnails[0].url} alt='' />
			</div>
			<div className='result__item__content'>
				<h3 className='color-white'>{data.title}</h3>
				<div className='color-white'>{data.channelTitle}</div>
				<h4 className='color-white'>{data.description}</h4>
			</div>
		</div>
	);
};
const Channel = ({data}) => (
	<div className='channel'>
		<div>
			<ReactImg className='channel__item__img' src={data.thumbnail.thumbnails[0].url} alt='' />
		</div>
		<div className='channel__item__content'>
			<div className='color-white'>{data.title}</div>
		</div>
	</div>
);
const Playlist = ({data}) => (
	<div className='channel'>
		<div>
			<ReactImg className='channel__item__img' src={data.thumbnail[0].thumbnails[0].url} alt='' />
		</div>
		<div className='channel__item__content'>
			<div className='color-white'>{data.title}</div>
			<div className='color-white'>playlist</div>
		</div>
	</div>
);
export default Results;
