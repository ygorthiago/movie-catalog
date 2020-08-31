import React from 'react';
import PageHeader from '../../components/PageHeader';
import MovieDetailsItem from '../../components/MovieDetailsItem';
import { Main } from './styles';


function MovieDetails(){
  return(
    <>
      <PageHeader />
      <Main>
        <MovieDetailsItem />
      </Main>
    </>
  );
}

export default MovieDetails;
