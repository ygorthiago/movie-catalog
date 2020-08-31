import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: url,
  params: {
    api_key: 'cce00c760627a7029e2dd173c35333cf',
    language: 'pt-BR',
    include_adult: 'false'
  }
});


export default api;