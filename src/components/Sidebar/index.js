/** @format */

import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './Sidebar.css';
const Index = () => {
	const showSidebar = useSelector(state => state.visibilityReducer.showSidebar);
	return (
		<div className={`sidebar ${showSidebar && 'show-sidebar'}`}>
			<Icon path='/' name='Home' logo={HomeIcon} />
			<Icon path='/expore' name='Explore' logo={ExploreIcon} />
			<Icon path='/subscribe' name='Subscribe' logo={SubscriptionsIcon} />
			<Icon path='/library' name='Library' logo={VideoLibraryOutlinedIcon} />
		</div>
	);
};
const Icon = props => (
	<Link className='text-decorate-none' to={props.path}>
		<abbr className='flex icon' title={props.name}>
			<div className='icon__img'>
				<props.logo className='color-white' />
			</div>
			<div className='color-white'>{props.name}</div>
		</abbr>
	</Link>
);

export default Index;
