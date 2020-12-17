import React, { useState } from 'react';
import Header from '../header/Header'; 
import Product from '../product/Product';
import './SearchResults.scss'; 

//load products dynamically
//static results 

//create component that is looped and added for every new item 

const SearchResults = () => {

    // const [showProduct, setShowProduct] = useState(false); 
    // console.log(showProduct); 

  return (
      <>
        <Header props='Results' /> 
        <section className="page-container">
            <section className="product-list">
                <div className="product-card">
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300"/>
                    </div>
                    <div className="product-card-info">
                        <h6>Namn</h6>
                        <span>X X X</span>
                        <button type="button" onClick={(e) => {Product(e)}}>More</button>
                    </div>
                </div>
            </section>  
        </section>
      </>

  );
}

export default SearchResults;