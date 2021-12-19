/** @format */

import React from 'react';

const Pagination = ({
  movies,
  firstPage,
  previous,
  actualPage,
  maxPage,
  nextPage,
  lastPage,
}) => {
  return (
    <div className='Container-pagination'>
      <div className='page'>
        <button className='btn' onClick={firstPage}>
          {'|< '}
        </button>
        <button className='btn' onClick={previous}>
          {'<'}
        </button>
        <span id='pageInfo'>{`page ${actualPage} / ${maxPage}`}</span>
        <button className='btn' onClick={nextPage}>
          {'>'}
        </button>
        <button className='btn' onClick={lastPage}>
          {'>|'}
        </button>
      </div>
      <div className='pagination'></div>
    </div>
  );
};

export default Pagination;
