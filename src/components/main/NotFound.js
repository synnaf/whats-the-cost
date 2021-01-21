import React from 'react';
import './NotFound.scss'; 

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