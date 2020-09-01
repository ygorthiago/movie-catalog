import React, { useState, useEffect, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import SearchInput from '../../components/SearchInput';
import MovieItem, { Movie } from '../../components/MovieItem';
import Pagination from '../../components/Pagination';

import { Main, MovieNotFound } from './styles';
import api from '../../services/api';

function Search() {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

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

    function compare(a: any ,b: any) {
      if (a.popularity < b.popularity)
         return 1;
      if (a.popularity > b.popularity)
        return -1;
      return 0;
    }
    
    setMovieList(response.data.results.sort(compare));
    setCurrentPage(1);    
  } 

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieList.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        {currentMovies.length > 0 
        ? currentMovies.map((movie: Movie) => {
          return (
            <MovieItem 
              key={movie.id}
              movie={ movie }
            />
          )
        })
        : <MovieNotFound>Nenhum filme encontrado 😥</MovieNotFound>
      }
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movieList.length}
          paginate={paginate}
          currentPage={currentPage}          
        />
      </Main>

    </>
  );
}

export default Search;
