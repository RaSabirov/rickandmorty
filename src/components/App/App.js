import React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Wrapper } from '../Wrapper/Wrapper';
import { SearchContext } from '../../context/searchContext';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../AboutPage/AboutPage';
import { Pagination } from '../Pagination/Pagination';

export const App = () => {
	const [cards, setCards] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [genderValue, setGenderValue] = React.useState('');

	const [currentPage, setCurrentPage] = React.useState(1);
	const [pageCount, setPageCount] = React.useState(0);

	React.useEffect(() => {
		const search = searchValue ? `&name=${searchValue}` : '';
		const gender = genderValue ? `&gender=${genderValue}` : '';

		axios
			.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}${search}${gender}`)
			.then((res) => {
				// console.log(res.data.info.count);
				setCards(res.data.results);
				setPageCount(res.data.info.pages);
			})
			.catch((err) => console.log(err, 'Ошибка загрузки данных'));
	}, [searchValue, genderValue, currentPage]);

	function onChangePage(number) {
		setCurrentPage(number);
	}

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
					<div className='paginate__container'>
						<Pagination pageCount={pageCount} onChangePage={onChangePage} />
					</div>
				</Wrapper>
			</SearchContext.Provider>
		</div>
	);
};
