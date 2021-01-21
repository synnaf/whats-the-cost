import React, { useState } from 'react';
import './Header.scss'; 

const Header = (title) => {
  
  const [pageTitle] = useState(title.props); 

  return (
      <>
        <section className="page__title" id="myHeader">
            <h2 className="title">{pageTitle}</h2>
        </section>
      </>

  );
}

export default Header;