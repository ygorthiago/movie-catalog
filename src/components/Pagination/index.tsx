import React from 'react';
import { Link } from 'react-router-dom';

import  { PaginationContainer, PageNumber } from './styles';

interface PaginationProps {
  moviesPerPage: number,
  totalMovies: number
  paginate: any,
  currentPage: number
}

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalMovies /moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map(number => {
        return(
          <ul key={number}>
            <PageNumber 
              isSelected={number === currentPage}
              // to=""
              onClick={() => {
                paginate(number); 
                window.scrollTo(0, 0);
              }}
            >
              {number}
            </PageNumber>
          </ul>
        )
      })}
    </PaginationContainer>
  )
}

export default Pagination;