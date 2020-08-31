import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from '../src/pages/Search';
import MovieDetails from '../src/pages/MovieDetails';

function Routes() {
  return (    
    <BrowserRouter>
      <Route path='/' exact component={Search} />
      <Route path='/movie-details' component={MovieDetails} />
    </BrowserRouter>
  );
}

export default Routes;