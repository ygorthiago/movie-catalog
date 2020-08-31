import React, { useState, useEffect, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import SearchInput from '../../components/SearchInput';
import MovieItem, { Movie } from '../../components/MovieItem';

import { Main, Pagination, PaginationButton, PaginationItem } from './styles';
import api from '../../services/api';

function Search() {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/movie/popular', {
      
    })
    .then(response => {
      setMovieList(response.data.results);
    })
  }, []); 

  async function searchMovies(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/search/movie', {
      params: {
        query: search
      }
    });

    setMovieList(response.data.results);
  }

  return (
    <>
      <PageHeader />

      <Main>
        <form onSubmit={ searchMovies }>          
          <SearchInput
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
          />          
        </form>

        {movieList.map((movie: Movie) => {
          return (
            <MovieItem 
              key={movie.id}
              movie={ movie }
            />
          )
        })}
      </Main>

    </>
  );
}

export default Search;
