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

  let buttonType = 'primary';
  classNames({ [`btn-${buttonType}`]: true }); 
  //vad är buttontupe och vart tar den vägen? 
  /*
  kör en funktion som tar emot buttonType, 
  och den kör en spread in i komponenten? 
  */

//  function renderTheCat(mouse) {
//     return <Cat mouse={mouse} />;
//   }; 

//   <Mouse render={this.renderTheCat} /> 



  return (
    <>
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
          {/* pass down a children prop? 
            children={mouse => (
              <Compontnet props={mouse} /> ? 
            )}
          */}

      <Route exact path='/search/searchresults/product' component={Product}></Route>
    </Switch>

      {/* <SearchResults /> */}
    </>

  );
}

export default Main;