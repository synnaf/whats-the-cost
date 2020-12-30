import React, { useState } from 'react';
import Header from '../header/Header'; 
import './SearchPage.scss'; 


//create search form Search.js 
import { searchProduct } from './api';
import SearchResults from '../searchResults/SearchResults';


const SearchPage = () => {

    const [search, setSearch] = useState(false);
    const [results, setResults] = useState([]); 
    const [searchValue, setSearchValue] = useState('');  

    function getSearchTerm(e) {
        e.preventDefault(); 
        //vänta in hela ??? 
        setSearchValue(e.target.value); 
        // loadSearch(searchValue); 
    }

    function loadSearch() {
        console.log('a searchterm:', searchValue); 
        //skicka med en sträng hit 

        searchProduct(searchValue)
        .then((req, res)=> {
            let list = [...req.data.data]; //this contains the search results in data-array! 
            console.log(list);  //list är en lista med 50 objekt 

            setSearch(true);
            return list; 
        })
        .then((test) => {
            setResults(test);
            console.log(test); 
            return;   
            // console.log('results state', results);  //varför loggas inte den här? n
        })
    }

  return (
      <>
        {/* skicka med props vilken page det är?  */}
        {/* <Header props='Search' /> */}

        {search 
        ?   <SearchResults props={results} />
        :    <section className="page-container">
                <section className="search-product">
                    <p className="">
                        Search for a product and find it's current values... 
                    </p>
                    <input 
                        type="text" 
                        placeholder="An interesting product" 
                        value={searchValue} 
                        onChange={getSearchTerm} 
                    /> 
                    <button type="button" onClick={loadSearch}>
                        Click
                    </button>
                </section>
                <section className="yellow-section">
                    <p className="">
                        Or find a full list of registered products...
                    </p>
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300" /> 
                        <button type="button">Click</button> 
                    </div>
                </section>
            </section>
        }
      </>
  );
}

export default SearchPage;