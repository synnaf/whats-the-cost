import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
// import { ListContext } from './ListContext';
import { ValueContext } from '../main/ValueContext'; 
import Home from '../home/Home'; 
import About from '../about/About';
import SearchPage from '../search/SearchPage';
import LikeList from '../likeList/LikeList';
import SearchResults from '../searchResults/SearchResults';
import NotFound from './NotFound'; 


//TODO: byt namn på main till ngt annat 
const Main = () => {
  // const [available, setAvailable] = useState([]); 
  const [values, setValues] = useState({}); 
  const [productList, setproductList] = useState([]); 
  // const [likes, setLikes] = useState([]); 
 
  function searchResult(data) {
    setproductList(data);
  };

  //TODO: fixa så att routing + meny fungerar ihop
  //TODO: sökbar routing - what should it do? 
  //TODO: Not Found har slutat fungera!!! 
  return (
    <>
      <Switch> 
      {/* <LikeContext.Provider value={{likes, setLikes}}>  */}
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/likes' 
              component={LikeList} 
            />
          <ValueContext.Provider value={{values, setValues}}>
              <Route exact path='/search' 
                  render={(props) => (
                      <SearchPage {...props} redirectSearch={searchResult} />
                  )}
              /> 
              <Route exact path='/search/:searchTerm' 
                  render={(props) => (
                      <SearchResults {...props} list={productList} />
                  )}
              />  
          </ValueContext.Provider>

          
          <Route component={NotFound} /> 
          {/* </LikeContext.Provider> */}

      </Switch>
    </>
  );
}

export default Main;