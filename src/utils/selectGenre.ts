import api from '../services/api';

async function selectGenre(genre: string) {
  function handleSpecialCharacters (word: string){
    word = word.replace(/[ÀÁÂÃÄÅ]/g,"A");
    word = word.replace(/[ÈÉÊË]/g,"E");
    word = word.replace(/[ÌÍÎÏ]/g,"I");
    word = word.replace(/[ÒÓÔÕÖ]/g,"O");
    word = word.replace(/[ÙÚÛÜ]/g,"O");
    word = word.replace(/[Ç]/g, "C");
    return word;
  }

  const id = await api.get('/genre/movie/list')
    .then(response => {      
      const genresList: any = response.data.genres;
      
      const genreIndex = genresList.findIndex((g: any) => {    
        return handleSpecialCharacters(g.name.toUpperCase()) === handleSpecialCharacters(genre.toUpperCase());
      });
          
      if (genreIndex >= 0) {
        return genresList[genreIndex].id;
      } else {
        return undefined;
      }
    })

  return id;
}

export default selectGenre;