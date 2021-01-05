import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
// import classNames from 'classnames'

import Home from '../home/Home';  //render start page?
import About from '../about/About'; //about page 
import SearchPage from '../search/SearchPage'; //create search 
import NotFound from './NotFound'; 
import Product from '../product/Product';
import SearchResults from '../searchResults/SearchResults';

const Main = () => {

  //denna komponent syftar till en main-routing för menyn. när man klickar på allmänna saker. 
  //en annan routing + nested routing kommer finnas för de andra delarna av komponenterna. 
  // Exempelvis när man gör en sökning och resultaten ska visas, när man går in på enskild produkt. 

  const [available, setAvailable] = useState([]); //empty list   
  // //vad vi vill ta emot här? här ska vi skapa upp en lista? 

  function aFunction(data) {
      setAvailable(data);
      console.log(available); 
  }

  console.log(available); 

  return (
    <>
      <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/search' 
            render={(props) => (
                <SearchPage {...props} func={aFunction} />
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
        <Route component={NotFound} /> 
      </Switch>
    </>
  );
}

export default Main;