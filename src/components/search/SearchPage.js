import React, { useState } from 'react';
import Header from '../header/Header'; 
import './SearchPage.scss'; 


//create seatch form Search.js 
import { searchProduct } from './Search';
import SearchResults from '../searchResults/SearchResults';



const SearchPage = () => {

    const [search, setSearch] = useState(false); 

    searchProduct('ketchup').then((req, res)=> {
        console.log('this is req', req.data.data); //this contains the search results in data-array! 
        console.log('this is res', res);  //empty 
    }); 

    function loadSearch() {
        setSearch(true); 
    }

    //när man klickar på knappen så görs sökningen 
    //resultatet skickas till resultat komponenten, som laddas när man trycker på knappen? 
    //resultatsidan är således ett barn till searchPage, och tar emot datan genom props 
    //hur skickar vi datan till barnet?
    //skapa upp ett interface för hur vårt props ska se ut  
    
    // function runRedirect() {
    //     // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
    // }
  return (
      <>
        {/* skicka med props vilken page det är?  */}
        {/* <Header props='Search' /> */}

        {search 
        ?   <SearchResults />
        :    <section className="page-container">
                <section className="search-product">
                    <p className="">
                        Search for a product and find it's current values... 
                    </p>
                    <input type="text" placeholder="An interesting product" value="" onChange="" /> 
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