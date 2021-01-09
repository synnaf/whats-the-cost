import React, { useState } from 'react';
import classNames from 'classnames';
import './Header.scss'; 

//lägg in classNames här, så att den hämtar in dem automatiskt? 

const Header = (title) => {
  // console.log(title.props); 

    const [page, setPage] = useState(false);     
    const [pageTitle, setPageTitle] = useState(title.props); 
    const pageClasses = classNames({ pageActive: page }); //gets the name pageActive when state is true 

    // window.onscroll = () => {
    //   //find position x

    //   var header = document.getElementById("myHeader");
    //   var sticky = header.offsetTop; //152 

    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("--sticky");
    //   } else {
    //     header.classList.remove("--sticky");
    //   }
    // }; 

  return (
      <>
        <section className="page__title" id="myHeader">
            <h2 className="subpage-title">{pageTitle}</h2>
        </section>
      </>

  );
}

export default Header;