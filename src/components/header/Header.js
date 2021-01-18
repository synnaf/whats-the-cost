import React, { useState } from 'react';
import classNames from 'classnames';
import './Header.scss'; 

const Header = (title) => {
  
    const [page, setPage] = useState(false);     
    const [pageTitle, setPageTitle] = useState(title.props); 

  return (
      <>
        <section className="page__title" id="myHeader">
            <h2 className="title">{pageTitle}</h2>
        </section>
      </>

  );
}

export default Header;