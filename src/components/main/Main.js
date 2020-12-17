import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames'

import Home from '../home/Home';  //render start page?
import About from '../about/About'; 
import SearchPage from '../search/SearchPage';
import SearchResults from '../searchResults/SearchResults';
import Product from '../product/Product';

const Main = () => {

  const [page, setPage] = useState('test'); 
  classNames({ page: true }, { bar: true });

  //dynamic assignment of className? 
  let buttonType = 'primary';
  classNames({ [`btn-${buttonType}`]: true });

  return (
    <Switch> 
    {/* add 404. ot found */}
      <Route exact path='/' component={Home}></Route>
      <Route 
        exact path='/about' 
        render={(buttonType) => (
          <About {...buttonType}  props={page} />
        )}
      />
      <Route exact path='/search' component={SearchPage}></Route>
      <Route exact path='/search/searchresults' component={SearchResults}></Route>
      <Route exact path='/search/searchresults/product' component={Product}></Route>
    </Switch>


  );
}

export default Main;