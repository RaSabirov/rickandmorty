import React from 'react';
import axios from 'axios';
import './AboutPage.scss';
import { Link, useParams } from 'react-router-dom';

export const AboutPage = () => {
	const [cards, setCards] = React.useState([]);
	const { id } = useParams();
	const { name, gender, image, status, species, created } = cards;

	React.useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then((res) => setCards(res.data))
			.catch((e) => console.log(e, 'Ошибка загрузки данных'));
	}, [id]);

	return (
		<div className='about-container'>
			<div className='about-item'>
				<img className='about-item__img' src={image} alt='' />
				<div className='about-item__text-container'>
					<h3 className='about-item__name'>{name}</h3>
					<p className='about-item__id'>ID: {id}</p>
					<p className='about-item__gender'>Gender: {gender}</p>
					<p className='about-item__gender'>Status: {status}</p>
					<p className='about-item__gender'>Species: {species}</p>
					<p className='about-item__gender'>Created: {created}</p>
				</div>
			</div>
			<Link className='btn-home' to='/'>
				Назад
			</Link>
		</div>
	);
};
