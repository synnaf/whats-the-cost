import React from 'react';
import './SearchResults.scss'; 

//load products dynamically
//static results 

//create component that is looped and added for every new item 

const SearchResults = () => {
  return (
    <section className="subpage-container">
        <h2 className="subpage-title">Results</h2>

        <section className="product-list">
            <div className="product-card">
                <div className="placeholder">
                    <img src="https://picsum.photos/200/300"/>
                </div>
                <div className="product-card-info">
                    <h6>Namn</h6>
                    <span>X X X</span>
                    <button type="button">More</button>
                </div>
            </div>
            <div className="product-card">
                <div className="placeholder">
                    <img src="https://picsum.photos/200/300"/>
                </div>
                <div className="product-card-info">
                    <h6>Namn</h6>
                    <span>X X X</span>
                    <button type="button">More</button>
                </div>
            </div>
            <div className="product-card">
                <div className="placeholder">
                    <img src="https://picsum.photos/200/300"/>
                </div>
                <div className="product-card-info">
                    <h6>Namn</h6>
                    <span>X X X</span>
                    <button type="button">More</button>
                </div>
            </div>
        </section>
    </section>
  );
}

export default SearchResults;