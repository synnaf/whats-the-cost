import React, { useState } from 'react';
import Header from '../header/Header'; 
import { searchProduct } from './api';
import './SearchPage.scss'; 

const SearchPage = (props) => { 
    const [searchValue, setSearchValue] = useState('');  

    function getSearchTerm(e) {
        e.preventDefault(); 
        setSearchValue(e.target.value); 
    }; 

    //search router in backend 
    function loadSearch(e) {
       e.preventDefault(); 
        //add axios request here??? 
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
            </section>
        </>
    );
}

export default SearchPage;