import genres from './datas/genres.json';

function selectGenre(g: string) {
  const genresList: any = genres;

  function handleSpecialCharacters (word: string){
    word = word.replace(/[ÀÁÂÃÄÅ]/g,"A");
    word = word.replace(/[ÈÉÊË]/g,"E");
    word = word.replace(/[ÌÍÎÏ]/g,"I");
    word = word.replace(/[ÒÓÔÕÖ]/g,"O");
    word = word.replace(/[ÙÚÛÜ]/g,"O");
    word = word.replace(/[Ç]/g, "C");
    return word;
}

  const genreIndex = genresList.genres.findIndex((gen: any) => {    
    return handleSpecialCharacters(gen.name.toUpperCase()) === handleSpecialCharacters(g.toUpperCase())
  });

  if (genreIndex >= 0) {
    return genresList.genres[genreIndex].id;
  } else {
    return undefined;
  }

}

export default selectGenre;