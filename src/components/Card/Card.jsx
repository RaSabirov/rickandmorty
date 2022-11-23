import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
// import cardImg from '../../assets/img/rickmorty.jpg'

export const Card = ({ card }) => {
	const { id, image, name, gender } = card;

	return (
		<Link to={`${card.id}`} key={id}>
			<li className='cards-item'>
				<img className='cards-item__img' src={image} alt='' />
				<div className='cards-item__text-container'>
					<h3 className='cards-item__name'>{name}</h3>
					<p className='cards-item__id'>ID: {id}</p>
					<p className='cards-item__gender'>Gender: {gender}</p>
				</div>
			</li>
		</Link>
	);
};
