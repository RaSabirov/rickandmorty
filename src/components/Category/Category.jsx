import React from 'react';
// import Select from 'react-select';
import './Category.scss';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export const Category = ({ onClickCategory, genderValue }) => {
	const categories = ['male', 'female', 'unknow'];
	const [isOpen, setIsOpen] = React.useState(false);
	const [active, setActive] = React.useState(false);

	function clearFilter() {
		window.location.reload(false);
	}

	function handleClickCategory() {
		setActive(!active);
		console.log(active);
	}

	return (
		<div className='category-container'>
			<div className='category'>
				<div className='category__box'>
					<div className='category__btn' onClick={() => setIsOpen(!isOpen)}>
						Gender
						{isOpen ? <IoIosArrowUp className='arrow-btn' /> : <IoIosArrowDown className='arrow-btn' />}
					</div>
				</div>
				{isOpen && (
					<div className='category__popup'>
						<ul>
							{categories.map((status, i) => (
								<li
									className={active === i ? 'active' : ''}
									key={status}
									onClick={() => {
										onClickCategory(status);
										handleClickCategory();
									}}
								>
									{status}
								</li>
							))}
						</ul>
					</div>
				)}
				<button className='category__clearbtn' type='submit' onClick={clearFilter}>
					Очистить фильтр
				</button>
			</div>
		</div>
	);
};
