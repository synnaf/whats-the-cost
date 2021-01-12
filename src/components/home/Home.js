import React, { useEffect, useState } from 'react';
import './Home.scss';

const Home = () => {


  return (
      <>
        <section className="hero">
          <div className="circle" id="circle">
            {/* circle */}
          </div>
          <h1 className="main-text animated-hero-text">
              What's
          </h1>
          <h1 className="animated-hero-text" id="heroText"> </h1>
          {/* <h1 className="animated-hero-text">The Price</h1>
          <h1 className="animated-hero-text">The Value</h1> */}
        </section>
      </>

  );
}

export default Home;