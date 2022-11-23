import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

export const Pagination = ({ onChangePage, pageCount }) => {
	function handlePageClick(e) {
		onChangePage(e.selected + 1);
		console.log(e.selected);
	}
	return (
		<ReactPaginate
			className='paginate'
			pageClassName='paginate__li'
			nextClassName='paginate__next'
			previousClassName='paginate__prev'
			breakClassName='paginate__break'
			pageLinkClassName='paginate__link'
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={handlePageClick}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			renderOnZeroPageCount={null}
		/>
	);
};
