import React from 'react';
import Header from '../header/Header'; 
import './SearchPage.scss'; 


const SearchPage = () => {
  return (
      <>
        {/* skicka med props vilken page det är?  */}
        <Header props='Search' />
        <section className="page-container">
        <section className="search-product">
            <p className="">
                Search for a product and find it's current values... 
            </p>
            <input type="text" placeholder="An interesting product" value="" onChange="" /> 
            <button type="button">
                Click
            </button>
        </section>

        <div className="yellow-section">
            <div className="placeholder">
                <img src="https://picsum.photos/200/300" /> 
            </div>
            <div className="test">
                <p>
                    Here is some text 
                </p>
                <button type="button">Click</button>
            </div>
        </div>
    </section>
      </>

  );
}

export default SearchPage;