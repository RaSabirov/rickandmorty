import React from 'react';
import { SearchContext } from '../../context/searchContext';
import './Search.scss';

export const Search = () => {
	const { setSearchValue } = React.useContext(SearchContext);
	const [value, setValue] = React.useState('');
	const inputRef = React.useRef();

	function onChangeInput(e) {
		setValue(e.target.value);
		setSearchValue(e.target.value);
	}

	function onClickClearInput() {
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	}

	return (
		<div className='search'>
			<form className='search__form'>
				<input
					ref={inputRef}
					className='search__input'
					type='text'
					placeholder='Поиск персонажа..'
					value={value}
					onChange={onChangeInput}
				/>
				{value && (
					<svg
						onClick={onClickClearInput}
						className='search__close-icon'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z'></path>
					</svg>
				)}
			</form>
		</div>
	);
};
