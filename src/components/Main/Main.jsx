import React from 'react';
import './Main.scss';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import { Category } from '../Category/Category';

export const Main = ({ cards, searchValue, setCards, setGenderValue, genderValue }) => {
	return (
		<>
			<Search />
			<section className='section-cards'>
				<div className='main'>
					<Category
						setCards={setCards}
						genderValue={genderValue}
						cards={cards}
						onClickCategory={(i) => setGenderValue(i)}
					/>
					<ul className='cards'>
						{cards
							.filter((card) => card.name.toLowerCase().includes(searchValue.toLowerCase()))
							.map((card) => (
								<Card key={card.id} card={card} />
							))}
						{}
					</ul>
				</div>
			</section>
		</>
	);
};
