import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './NotFound.scss'; 
// import classNames from 'classnames'

const NotFound = () => {
  return (
    <>
      <section className="page notfound">
        <h2>Page not found</h2>
          <button onClick={()=> window.history.go(-1)} >
            Go back
          </button>
      </section>
    </>
  );
}

export default NotFound;