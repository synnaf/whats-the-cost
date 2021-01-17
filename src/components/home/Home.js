import React from 'react';
import './Home.scss';
import BGimg from '../../assets/bg_full.svg'; 

const Home = () => {

  return (
      <>
        <section className="hero">
          <div className="hero__text">
            <h1 className="main-text animated-hero-text">
                What's
            </h1>
            <h1 className="animated-hero-text" id="heroText">The Cost</h1>
          </div>
          <div className="hero__bg" id="bg">
            <img src={BGimg} alt="geometry" />
          </div>
        </section>
      </>

  );
}

export default Home;