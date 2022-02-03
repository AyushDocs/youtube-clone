/** @format */

import AppsIcon from '@mui/icons-material/Apps';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import actions from '../../redux/actions.json';
import ReactImg from '../utils/ReactImg';
import './Header.css';
const Header = () => {
	const userReducer = useSelector(state => state.userReducer);
	const [ShowFullSearch, setShowFullSearch] = useState(false);
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		navigate(`/results?search_query=${search.split(' ').join('+')}`);
	};
	return (
		<header className={`youtube-header ${ShowFullSearch || ' space-between'}`}>
			<div className='header__left show-lg'>
				<HeaderIcon onClick={() => dispatch({type: actions.SET_SHOW_SIDEBAR, payload: true})} name='menu' icon={MenuIcon} className='hamburger' />
				<div className='yt-icon'>
					<HeaderIcon name='/' icon={YouTubeIcon} className='yt-red' />
					<div className='color-white yt-header-icon-text'>
						YouTube <sup>IN</sup>
					</div>
				</div>
			</div>
			<div className='header__left hide-lg'>
				{ShowFullSearch || <HeaderIcon name='menu' icon={MenuIcon} className='hamburger' />}
				{ShowFullSearch && <HeaderIcon onClick={() => setShowFullSearch(false)} name='back' icon={KeyboardBackspaceIcon} className='back' />}
				{ShowFullSearch || (
					<div className='yt-icon'>
						<HeaderIcon name='/' icon={YouTubeIcon} className='yt-red' />
						<div className='color-white'>
							YouTube <sup>IN</sup>
						</div>
					</div>
				)}
			</div>
			{ShowFullSearch && (
				<form onSubmit={handleSubmit} className={'search-input-container hide-lg'}>
					<input onChange={e => setSearch(e.target.value)} value={search} placeholder='Search' className={'yt-search ' + ShowFullSearch || 'sm-none'} />
					<button className='search-icon' type='submit'>
						<SearchIcon className='color-white' />
					</button>
					<span className='big-mic'>
						<MicIcon className='color-white' />
					</span>
				</form>
			)}
			<form onSubmit={handleSubmit} className={'search-input-container show-lg '}>
				<input onChange={e => setSearch(e.target.value)} value={search} placeholder='Search' className={'yt-search ' + ShowFullSearch || 'sm-none'} />
				<button className='search-icon' type='submit'>
					<SearchIcon className='color-white' />
				</button>
				<span className='big-mic'>
					<MicIcon className='color-white' />
				</span>
			</form>
			<div className='header__right hide-lg'>
				{ShowFullSearch || <HeaderIcon onClick={() => setShowFullSearch(true)} className={'hide-lg'} name='Search' icon={SearchIcon} />}
				{ShowFullSearch || <HeaderIcon className={'hide-lg'} name='Search with your voice' icon={MicIcon} />}
				{/* <HeaderIcon className={ShowFullSearch && 'sm-none'} name='Search with your voice' icon={MicIcon} /> */}
				{ShowFullSearch || <HeaderIcon name='Create' icon={VideoCallOutlinedIcon} />}
				{ShowFullSearch || <HeaderIcon name='Youtube apps' icon={AppsIcon} />}
				{ShowFullSearch || <HeaderIcon name='notifications' icon={NotificationsOutlinedIcon} />}
				{ShowFullSearch || <ReactImg className='rounded' src={userReducer.imgUrl} alt='' />}
			</div>
			<div className='header__right show-lg'>
				<HeaderIcon onClick={() => setShowFullSearch(true)} className={'hide-lg'} name='Search' icon={SearchIcon} />
				<HeaderIcon className={'hide-lg'} name='Search with your voice' icon={MicIcon} />
				<HeaderIcon name='Create' icon={VideoCallOutlinedIcon} /> <HeaderIcon name='Youtube apps' icon={AppsIcon} />
				<HeaderIcon name='notifications' icon={NotificationsOutlinedIcon} /> <ReactImg className='rounded' src={userReducer.imgUrl} alt='' />
			</div>
		</header>
	);
};
const HeaderIcon = props => (
	<div
		onClick={() => {
			props.onClick();
			console.log('here');
		}}
		className='yt-header-icon'>
		<abbr title={props.name}>
			<props.icon fontSize={props.fontSize} className={'color-white ' + props.className} />
		</abbr>
	</div>
);

export default Header;
