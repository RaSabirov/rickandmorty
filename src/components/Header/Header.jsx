import React from 'react';
import './Header.scss';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<Link to='/'>
					<img className='header__logo' src={logo} alt='Логотип' />
				</Link>
			</div>
		</header>
	);
};
