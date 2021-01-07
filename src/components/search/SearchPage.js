import React, { useState } from 'react';
import Header from '../header/Header'; 
//create search form Search.js 
import { searchProduct } from './api';
import './SearchPage.scss'; 

const SearchPage = (props) => { 
    const [searchValue, setSearchValue] = useState('');  

    function getSearchTerm(e) {
        e.preventDefault(); 
        setSearchValue(e.target.value); 
    }; 

    function loadSearch(e) {
       e.preventDefault(); 
        searchProduct(searchValue)
            .then((req, res)=> {
                let list = [...req.data.data];  
                return list; 
            })
            .then((results) => {
                //if results is NOT equal to empty arr, redirect, other do null 
                if(results !== []) {
                    props.redirectSearch(results); 
                    //props.match.params.
                    props.history.push('/search/'+searchValue); 
                }  else {
                    //props.match.params.
                    alert('No available results'); 
                };  
            });   
    }; 

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
                    <button type="button" 
                        onClick={loadSearch} 
                        disabled={searchValue == '' ? true : false} 
                    >
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