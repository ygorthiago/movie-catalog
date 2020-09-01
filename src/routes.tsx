import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../src/pages/Search';
import MovieDetails from '../src/pages/MovieDetails';
import Page404 from './pages/Page404';

function Routes() {
  return (    
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Search} />
        <Route path='/movie-details' component={MovieDetails} />
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;