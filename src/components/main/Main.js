import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListContext } from './ListContext'; 

import Home from '../home/Home'; 
import About from '../about/About';
import SearchPage from '../search/SearchPage';
import Product from '../product/Product';
import SearchResults from '../searchResults/SearchResults';
import NotFound from './NotFound'; 

//TODO: byt namn på main till ngt annat 
const Main = () => {
  const [available, setAvailable] = useState([]); 
 
  function searchResult(data) {
      setAvailable(data);
      console.log('searchdata', data); 
  };

  //TODO: fixa dynamisk routing till :id/searchterm?? 
  return (
    <>
      <Switch> 
        <ListContext.Provider value={{available, setAvailable}}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/search' 
              render={(props) => (
                  <SearchPage {...props} redirectSearch={searchResult} />
              )}
          />
          <Route exact path='/search/result/:id' 
              component={Product} 
          />
          <Route exact path='/search/:searchTerm' 
              render={(props) => (
                  <SearchResults {...props} list={available} />
              )}
          /> 
          
        </ListContext.Provider>
          <Route component={NotFound} /> 
      </Switch>
    </>
  );
}

export default Main;