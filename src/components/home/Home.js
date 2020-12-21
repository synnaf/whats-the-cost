import React, { useState } from 'react';
import classNames from 'classnames'
import './Home.scss';

//lägg in classNames här, så att den hämtar in dem automatiskt? 
//home page

const Home = () => {
//   console.log(classNames);
// const [page, setPage] = useState(false);                                                         
// const pageClasses = classNames({ pageActive: page }); //gets the name pageActive when state is true 
// console.log(pageClasses); //logs page active 
//   setPage(true); 

  return (
      <>
        <section className="hero-section">
        <h1 className="main-text animated-hero-text">
            What's
        </h1>
        <h1 className="animated-hero-text">The Cost</h1>
        {/* <h1 className="animated-hero-text">The Price</h1>
        <h1 className="animated-hero-text">The Value</h1> */}
        </section>
      </>

  );
}

export default Home;