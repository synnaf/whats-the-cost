import React from 'react';
import './Home.scss';

//lägg in classNames här, så att den hämtar in dem automatiskt? 

//home page 

const Home = () => {
  return (
      <>
        <section className="hero-section">
        <h1 className="main-text animated-hero-text">
            What's
        </h1>
        <h1 className="animated-hero-text">The Cost</h1>
        </section>
      </>

  );
}

export default Home;