import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import formatDate from '../../utils/formatDate';
import posterNotFound from '../../assets/404PosterNotFound.jpg';

import { 
  MovieCard,
  PosterContainer,
  MovieDescriptionContainer,
  MovieTitle,
  MovieRating,
  ReleaseDate,
  MovieCategories,
  Sinopse,
  PosterImage,
  Category, 
  BackdropImage} from './styles';

export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
}

interface MovieItemProps {
  movie: Movie;
}

interface GenreList {
  id: number,
  name: string
}

const MovieItem: React.FC<MovieItemProps> = ({movie}) => {   
  const [genreList, setGenreList] = useState<any[]>([]);
  useEffect(() => {
    api.get('/genre/movie/list')
      .then(response => {
        setGenreList(response.data.genres);
      });

  }, []);

  const rating = (movie.vote_average * 10);

  const newTo = {
    pathname: '/movie-details',
    state: {      
      id: movie.id,
      title: movie.title,
      releaseDate: formatDate(movie.release_date),
      overview: movie.overview,
      genreIds: movie.genre_ids,
      rating: rating,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path
    }  
  }

  return (
    <MovieCard to={newTo}>
      <PosterContainer>        
        <PosterImage 
          src= {movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : posterNotFound} 
          alt="movie-poster"
        />
      </PosterContainer>
      <MovieDescriptionContainer>
        <header>
          <MovieTitle>
            <h1>{movie.title} </h1>
          </MovieTitle>

          <MovieRating>
            <span>{`${rating}%`} </span>
          </MovieRating>

          <ReleaseDate>
            <span>{formatDate(movie.release_date)}</span>
          </ReleaseDate>
        </header>
        <BackdropImage 
          src= {movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : ''} 
          alt="movie-poster"
        />
        <Sinopse>       
          {movie.overview}
        </Sinopse>
        <MovieCategories>
          {movie.genre_ids.map(genre => {            
              let genresName = genreList.find((gen: GenreList) => gen.id === genre);
              if(genresName){
                return <Category key={genre}>{genresName.name}</Category>              
              }            
          })}
        </MovieCategories>
      </MovieDescriptionContainer>
    </MovieCard>
  );
}

export default MovieItem;