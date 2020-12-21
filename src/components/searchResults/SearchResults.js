import React, { useState } from 'react';
import Header from '../header/Header'; 
import Product from '../product/Product';
import './SearchResults.scss'; 

//load products dynamically
//static results 
//create component that is looped and added for every new item 

//recieve props from parent Search component 
const SearchResults = (results) => {

    /* destructure props till enbart det vi vill ha  
        const { data.data } = results; 
    */
    console.log(results, 'these are results test'); 


  return (
      <>
        {/* <Header props='Results' />  */}
        <section className="page-container productlist">
            <div className="sort-products">
                <select className="sort-options">
                    <option>
                        Sort A-Z
                    </option>
                    <option>
                        Sort Z-A
                    </option>
                    <option>
                        Sort Test
                    </option>
                </select>
            </div>
            <section className="product-list">
                <div className="product-card">
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300"/>
                    </div>
                    <div className="product-card-info">
                        <h6>Namn</h6>
                        <span>X X X</span>
                        <button type="button"                             
                            onClick={''}>More</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300"/>
                    </div>
                    <div className="product-card-info">
                        <h6>Namn</h6>
                        <span>X X X</span>
                        <button type="button"                             
                            onClick={(e) => (
                                <Product props={e} />
                        )}>More</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300"/>
                    </div>
                    <div className="product-card-info">
                        <h6>Namn</h6>
                        <span>X X X</span>
                        <button type="button"                             
                            onClick={(e) => (
                                <Product props={e} />
                        )}>More</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300"/>
                    </div>
                    <div className="product-card-info">
                        <h6>Namn</h6>
                        <span>X X X</span>
                        <button type="button" 
                            onClick={(e) => (
                                <Product props={e} />
                        )}>More</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="placeholder">
                        <img src="https://picsum.photos/200/300"/>
                    </div>
                    <div className="product-card-info">
                        <h6>Namn</h6>
                        <span>X X X</span>
                        <button type="button" 
                            onClick={(e) => (
                                <Product props={e} />
                            )}>More</button>
                    </div>
                </div>
            </section>  
        </section>
      </>

  );
}

export default SearchResults;