import React, { useState } from 'react';
import Header from '../header/Header'; 
import Product from '../product/Product';
import './SearchResults.scss'; 

//load products dynamically
//static results 
//create component that is looped and added for every new item 

//recieve props from parent Search component 
const SearchResults = (results) => {

    /* destructure props till enbart det vi vill ha   */
        const { props } = results; 
   

   //results är ett objekt som innehåller en array 
    console.log(props, 'these are results test'); 
    let item2 = props.map((item)=> {
        console.log(item); 
        return <li className="product-card" key={item.id}>{item}</li>
    }); 


    console.log(item2, 'this is var item');  //this is undefined


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
            <ul className="product-list">
                { 
                    props.map((item)=> {
                        console.log(item); 
                        return <li className="product-card" key={item.id}>{item}</li>
                    })  
                }

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
            </ul>  
        </section>
      </>

  );
}

export default SearchResults;