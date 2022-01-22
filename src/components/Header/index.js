/** @format */

import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import ReactImg from '../utils/ReactImg'
import './Header.css';
const Header = () => {
	const userReducer = useSelector(state => state.userReducer);
	const [ShowFullSearch, setShowFullSearch] = useState(false);
	const [search, setSearch] = useState('');
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		navigate(`/results?search_query=${search.split(' ').join('+')}`);
	};
	return (
		<header className='youtube-header'>
			<div className='header__left'>
				<HeaderIcon name='menu' icon={MenuIcon} className='hamburger' />
				<div className='yt-icon'>
					<HeaderIcon name='/' icon={YouTubeIcon} className='yt-red' />
					<div className='color-white'>
						YouTube <sup>IN</sup>
					</div>
				</div>
			</div>
			<form onSubmit={handleSubmit} className={'search-input-container '}>
				<input onChange={e => setSearch(e.target.value)} value={search} placeholder='Search' className={'yt-search ' + ShowFullSearch || 'sm-none'} />
				<button className='search-icon' type='submit'>
					<SearchIcon className='color-white' />
				</button>
				<span className='big-mic'>
					<MicIcon className='color-white' />
				</span>
			</form>
			<div className='header__right'>
				<HeaderIcon className={ShowFullSearch && 'sm-none'} name='Search' icon={SearchIcon} />
				<HeaderIcon className={ShowFullSearch && 'sm-none'} name='Search with your voice' icon={MicIcon} />
				<HeaderIcon name='Create' icon={VideoCallOutlinedIcon} />
				<HeaderIcon name='Youtube apps' icon={AppsIcon} />
				<HeaderIcon name='notifications' icon={NotificationsOutlinedIcon} />
				<ReactImg className='rounded' src={userReducer.imgUrl} alt='' />
			</div>
		</header>
	);
};
const HeaderIcon = props => (
	<div className='yt-header-icon'>
		<abbr title={props.name}>
			<props.icon fontSize={props.fontSize} className={'color-white ' + props.className} />
		</abbr>
	</div>
);

export default Header;
