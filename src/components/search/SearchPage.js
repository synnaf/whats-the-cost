import React, { useState } from 'react';
import Header from '../header/Header'; 
import { searchProduct } from './consuApi';
import './SearchPage.scss'; 

const SearchPage = (props) => { 
    const [searchValue, setSearchValue] = useState('');  

    const getSearchTerm = (e) => {
        e.preventDefault(); 
        setSearchValue(e.target.value); 
    }; 

    const loadSearch = (e) => {
       e.preventDefault(); 

       searchProduct(searchValue)
            .then((req, res)=> {
                let list = [...req.data.data];  
                return list; 
            })
            .then((results) => {
                if(results !== []) {
                    props.redirectSearch(results); 
                    props.history.push('/search/'+searchValue); 
                }  else {
                    alert('No available results'); 
                };  
            });   
    }; 

    return (
        <>
           <section className="page">
                <Header props='Search' />
                <section className="search-product">
                    <p>
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
                        disabled={searchValue === '' ? true : false} 
                    >
                        Search 
                    </button>
                </section>
            </section>
        </>
    );
}

export default SearchPage;