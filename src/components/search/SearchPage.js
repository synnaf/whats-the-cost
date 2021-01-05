import React, { useState } from 'react';
import Header from '../header/Header'; 
import './SearchPage.scss'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


//create search form Search.js 
import { searchProduct } from './api';
import SearchResults from '../searchResults/SearchResults';


const SearchPage = (test) => {

    console.log(test); 

    // console.log(t.props); 
    // const [search, setSearch] = useState(false); //state som kontrollerar vilken komponent som renderas 

    const [results, setResults] = useState([]); //detta state måste upp? 
    const [searchValue, setSearchValue] = useState('');  

    function getSearchTerm(e) {
        e.preventDefault(); 
        setSearchValue(e.target.value); 
    }

    function loadSearch(e) {
       e.preventDefault(); 
        searchProduct(searchValue)
            .then((req, res)=> {
                let list = [...req.data.data];  
                console.log(list); 
                setResults(list); 
                // setSearch(true); 
                return list; 
            })
            .then((results) => {
                //if results is NOT equal to empty arr, redirect, other do null 
                if(results !== []) {
                    test.func(results); 
                    console.log(test); 
                    //test.match.params.
                    test.history.push('/search/'+searchValue); 
                }  else {
                    alert('No available results'); 
                } 
            })  
    }

  return (
      <>
           <section className="page">
                <Header props='Search' />
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
                    <button type="button" onClick={loadSearch} disabled={searchValue == '' ? true : false} >
                        {/* <a href="/search/results">Search</a> */}
                        Search 
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
      </>
  );
}

export default SearchPage;