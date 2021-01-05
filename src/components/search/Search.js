import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import SearchResults from '../searchResults/SearchResults';
import SearchPage from './SearchPage';


const Search = () => {

    //Denna komponenten hanterar routing för produkterna och sökningen. 
    //här finns nested routing, och dynamisk routing för de enskilda produkterna.
    //här finns ett delat state. 

    const [resultsList, setResultsList] = useState([]); 

    function createSearch(data) {
        console.log('recieve data', data); 
        // do-something
        setResultsList(data); 
        //re-route? 
    }; 

    return (
        //something 
        <div>Here is search + product routing </div>
        
    ); 
}

export default Search;