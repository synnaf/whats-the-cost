import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';  //render start page?
import About from '../about/About'; 
import SearchPage from '../search/SearchPage';
import SearchResults from '../searchResults/SearchResults';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/search' component={SearchPage}></Route>
      <Route exact path='/search/searchresults' component={SearchResults}></Route>
      {/* <Route exact path='/signup' component={Signup}></Route> */}
    </Switch>
  );
}

export default Main;