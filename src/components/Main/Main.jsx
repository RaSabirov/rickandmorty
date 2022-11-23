import React from 'react';
import './Main.scss';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import { Category } from '../Category/Category';

export const Main = ({ cards, searchValue, setCards, setGenderValue, genderValue, setSearchValue }) => {
	// let cardsList = document.getElementById('card-list').getElementsByTagName('li');
	// console.log(cardsList.childNodes.length);
	const ref = React.useRef();

	React.useLayoutEffect(() => {
		document.onreadystatechange = () => {
			console.log(ref.current.length);
		};
	}, [searchValue]);

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
					<ul className='cards' id='card-list' ref={ref}>
						{cards
							.filter((card) => card.name.toLowerCase().includes(searchValue.toLowerCase()))
							.map((card) => (
								<Card key={card.id} card={card} />
							))}
					</ul>
					{/* {cardsList.length === 0 ? <div>Ничего не найдено</div> : ''} */}
				</div>
			</section>
		</>
	);
};
