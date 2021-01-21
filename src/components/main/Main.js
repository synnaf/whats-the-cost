import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ValueContext } from '../main/ValueContext'; 
import Home from '../home/Home'; 
import About from '../about/About';
import SearchPage from '../search/SearchPage';
import LikeList from '../likeList/LikeList';
import SearchResults from '../searchResults/SearchResults';
import NotFound from './NotFound'; 

const Main = () => {
  const [values, setValues] = useState({}); 
  const [productList, setproductList] = useState([]); 
 
  function searchResult(data) {
    setproductList(data);
  };

  return (
    <> 
      <ValueContext.Provider value={{values, setValues}}>
        <Switch>
          <Route exact path='/' component={Home} />  
          <Route exact path='/about' component={About} />
          <Route exact path='/likes' 
              component={LikeList} 
            />       
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
          <Route path="*" component={NotFound} />
        </Switch>
      </ValueContext.Provider>  
    </>
  );
}

export default Main;




