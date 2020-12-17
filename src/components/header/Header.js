import React, { useState } from 'react';
import classNames from 'classnames';
import './Header.scss'; 

//lägg in classNames här, så att den hämtar in dem automatiskt? 

const Header = (title) => {
  console.log(title.props); 

    const [page, setPage] = useState(false);     
    const [pageTitle, setPageTitle] = useState(title.props); 
    const pageClasses = classNames({ pageActive: page }); //gets the name pageActive when state is true 

  return (
      <>
        {/* <section className={pageClasses}> */}
        <section className="page-title">
            <h2 className="subpage-title">{pageTitle}</h2>
        </section>
      </>

  );
}

export default Header;