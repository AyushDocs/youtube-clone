/** @format */

import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import OverviewVideos from '../components/OverviewVideos';
import actions from '../redux/actions.json';
const json = [
	{title: 'The Call | Pepsi Super Bowl LVI Halftime Show OFFICIAL TRAILER', channel: 'Pepsi', videoImg: 'https://i.ytimg.com/vi/h3NhX6-5mO0/mqdefault.jpg', published: '2022-01-20T13:45:01Z', id: 'h3NhX6-5mO0'},
	{title: 'Charlie Puth - Light Switch [Official Music Video]', channel: 'Charlie Puth', videoImg: 'https://i.ytimg.com/vi/WFsAon_TWPQ/mqdefault.jpg', published: '2022-01-20T17:00:10Z', id: 'WFsAon_TWPQ'},
	{title: 'I Spent 37,094 Years Making Humanity Regret Existing - WorldBox', channel: "Let's Game It Out", videoImg: 'https://i.ytimg.com/vi/3dNZA5YivtA/mqdefault.jpg', published: '2022-01-20T16:00:01Z', id: '3dNZA5YivtA'},
	{title: 'Seth Rogen Scorches His Tongue While Eating Spicy Wings | Hot Ones', channel: 'First We Feast', videoImg: 'https://i.ytimg.com/vi/9zcaaYpiUEU/mqdefault.jpg', published: '2022-01-20T16:00:06Z', id: '9zcaaYpiUEU'},
	{title: 'Boy Breaks The Rules In Class, What Happens Next Will Shock You #Shorts', channel: 'Luke Davidson', videoImg: 'https://i.ytimg.com/vi/7hhQpu93Cf0/mqdefault.jpg', published: '2022-01-20T16:00:02Z', id: '7hhQpu93Cf0'},
	{title: 'LAZARBEAM vs LOSERFRUIT vs LACHLAN!', channel: 'PWR', videoImg: 'https://i.ytimg.com/vi/WfqZ5nCKGDQ/mqdefault.jpg', published: '2022-01-20T17:00:22Z', id: 'WfqZ5nCKGDQ'},
	{title: 'The Legend of the Cast of The Legend of Vox Machina', channel: 'Critical Role', videoImg: 'https://i.ytimg.com/vi/EOeZjYZtmKA/mqdefault.jpg', published: '2022-01-20T17:00:32Z', id: 'EOeZjYZtmKA'},
	{title: 'ANTONIO BROWN OPENS UP WITH BRANDON MARSHALL | I AM ATHLETE', channel: 'I AM ATHLETE', videoImg: 'https://i.ytimg.com/vi/PH_1E0YmHJ4/mqdefault.jpg', published: '2022-01-20T16:40:09Z', id: 'PH_1E0YmHJ4'},
];
const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({type: actions.SET_SHOW_SIDEBAR, payload: true});
	}, [dispatch]);
	return (
		<div>
			{/* <HeaderTags /> */}
			<OverviewVideos json={json} />
		</div>
	);
};

export default Home;
