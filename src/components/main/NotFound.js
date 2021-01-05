import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
// import classNames from 'classnames'

import Home from '../home/Home';  //render start page?
import About from '../about/About'; //about page 
import SearchPage from '../search/SearchPage'; //create search 

const NotFound = () => {


  return (
    <>
        <h2>Not Found</h2>
    </>
  );
}

export default NotFound;