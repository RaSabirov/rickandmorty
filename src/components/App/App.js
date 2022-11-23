import React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Wrapper } from '../Wrapper/Wrapper';
import { SearchContext } from '../../context/searchContext';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../AboutPage/AboutPage';

export const App = () => {
	const [cards, setCards] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [genderValue, setGenderValue] = React.useState('');

	React.useEffect(() => {
		const search = searchValue ? `&name=${searchValue}` : '';
		const gender = genderValue ? `&gender=${genderValue}` : '';

		axios
			.get(`https://rickandmortyapi.com/api/character/?name=${search}${gender}`)
			.then((res) => setCards(res.data.results))
			.catch((err) => console.log(err, 'Ошибка загрузки данных'));
	}, [searchValue, genderValue]);

	return (
		<div className='App'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<Wrapper>
					<Routes>
						<Route
							path='/'
							element={
								<Main
									cards={cards}
									searchValue={searchValue}
									setSearchValue={setSearchValue}
									setCards={setCards}
									genderValue={genderValue}
									setGenderValue={setGenderValue}
								/>
							}
						/>
						<Route path='/:id' element={<AboutPage />} />
					</Routes>
				</Wrapper>
			</SearchContext.Provider>
		</div>
	);
};
