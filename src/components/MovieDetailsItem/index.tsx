import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useLocation } from "react-router-dom";
import api from '../../services/api';
import convertMinsToHrs from '../../utils/convertMinsToHrs';
import translateStatus from '../../utils/translateStatus';
import translateLanguage from '../../utils/translateLanguage';
import posterNotFound from '../../assets/404PosterNotFound.jpg';
import { 
        MovieDetailsContainer, 
        Main, 
        DetailsHeader,
        SinopseSection,
        InformationSection,
        FooterSection,
        MovieRating,
        PosterContainer,
        PosterImage,
        Datas,
        VideoContainer,
        ResponsiveIframe,
        InformationList,
        InformationItem,
        BackButton,
        BackButtonContainer, 
        GenreList,
        GenreItem,
        BackdropImage} from './styles';        

interface GenreList {
  id: number,
  name: string
}

function MovieDetailsItem() {
  const location = useLocation();

  const [movie, setMovie] = useState<any>({});
  const [movieInformations, setMovieInformations] = useState<any>();
  const [genreList, setGenreList] = useState<any[]>([]);
  const [trailerKey, setTrailerKey] = useState<string>();

  useEffect(() => {
    if(location.state) {
      setMovie(location.state);
    }
  }, []);

  useEffect(() => {
    api.get('/genre/movie/list')
      .then(response => {
        setGenreList(response.data.genres);
      });      
    }, []);
  
  api.get(`/movie/${movie.id}/videos`)
    .then(response => {      
      if (response.data.results.length > 0) {
        setTrailerKey(response.data.results[0].key);        
      }
    }); 
   
  api.get(`/movie/${movie.id}`, {
    params: {
      append_to_response: 'videos'
    }
  })
    .then(response => { 
      if(!movieInformations){
        setMovieInformations([
          {title: 'Situação', content: translateStatus(response.data.status)},
          {title: 'Idioma', content: translateLanguage(response.data.original_language)},
          {title: 'Duração', content: convertMinsToHrs(response.data.runtime)},
          {title: 'Orçamento', content: response.data.budget !== 0 ?  response.data.budget.toLocaleString('en-us', {style: 'currency', currency: 'USD'}) : '--'},
          {title: 'Receita', content: response.data.revenue !== 0 ? response.data.revenue.toLocaleString('en-us', {style: 'currency', currency: 'USD'}) : '--'},
          {title: 'Lucro', content: (response.data.revenue === 0 || response.data.budget === 0) ?  '--' : (response.data.revenue - response.data.budget).toLocaleString('en-us', {style: 'currency', currency: 'USD'})}
        ]
        );
        if (response.data.videos.results.length > 0) {
          setTrailerKey(response.data.videos.results[0].key);
        }
      }
    });  

  return (
    <> 
    <MovieDetailsContainer className="movie-details-container">          
    <BackButtonContainer>
      <BackButton to="/">
          <FiArrowLeft /> Página inicial
      </BackButton>
    </BackButtonContainer>
      <DetailsHeader className="details-header">
        <h1>{movie.title}</h1>
        <span>{movie.releaseDate && movie.releaseDate}</span>
      </DetailsHeader>
      <Main>
        <Datas>          
          <SinopseSection>
            <h1>Sinopse</h1>
            <hr/>
            <p>{movie.overview}</p>        
          </SinopseSection>        
          { movie.backdrop !== null &&
            <BackdropImage 
              src= {`https://image.tmdb.org/t/p/w500/${movie.backdrop}`} 
              alt="movie-backdrop"
            />          
          }
          <InformationSection>
          <h1>Informações</h1> 
          <hr/>
          <InformationList>
            {movieInformations && movieInformations.map((information: any) => {
              return (
                <InformationItem key={information.title}>
                  <h3>{information.title}</h3>
                  <span>{information.content}</span>
                </InformationItem>
              );
            })}
          </InformationList>
          </InformationSection>
          <FooterSection>
            <GenreList>
              {movie.genreIds && movie.genreIds.map((genre: number) => {            
                let genresName = genreList.find((gen: GenreList) => gen.id === genre);
                if(genresName){
                  return <GenreItem key={genre}>{genresName.name}</GenreItem>              
                }
              })}

            </GenreList>            
            <MovieRating>
              <span>{`${movie.rating}%`}</span>
            </MovieRating>
          </FooterSection>      
        </Datas>
        <PosterContainer>        
          <PosterImage
            src= {movie.poster ? `https://image.tmdb.org/t/p/w500/${movie.poster}` : posterNotFound} 
            alt="movie-poster"
          />                    
        </PosterContainer>
      </Main>

    </MovieDetailsContainer>    
      {trailerKey && 
        <VideoContainer>
          <ResponsiveIframe
            title="Titulo do Iframe"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0&mute=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />      
      </VideoContainer>
      }
  </>
  );
}

export default MovieDetailsItem;
