import React, { useEffect, useState } from 'react';
import './Home.scss';
import BGcircle from '../../assets/svg/circle.svg'; 
import BGimg from '../../assets/bg_full.svg'; 


const Home = () => {
  // const [textContent, setTextContent] = useState('The Price'); 
  // let text = document.getElementById('heroText'); 

  // useEffect(() => {
  //   text.innerHTML = textContent; 
  //   myMove(); 
  // }, []); 

  // setTextContent('The Value'); 
  // setTextContent('The Cost'); 

  // const myMove = () => {   
  //   setInterval(() => {
  //     setTextContent('The Value');
  //     let text = document.getElementById('heroText'); 
  //     text.style.color = "#FA6333";  
  //     myMove2();   
  //   }, 1000); 
  // };
  // const myMove2 = () =>  {   
  //   setInterval(() => {
  //     setTextContent('The Cost');
  //     let text = document.getElementById('heroText');  
  //     text.style.color = "#DAD9FF";
  //   }, 1000); 
  // }; 

  return (
      <>
        <section className="hero">
          <div className="hero__text">

            <h1 className="main-text animated-hero-text">
                What's
            </h1>
            <h1 className="animated-hero-text" id="heroText">The Cost</h1>
          </div>

          {/* <div className="hero__circle" id="circle">
            <img src={BGcircle} alt="floating circle" />
          </div> */}

          <div className="hero__bg" id="bg">
            <img src={BGimg} alt="geometry" />
          </div>

        </section>
      </>

  );
}

export default Home;