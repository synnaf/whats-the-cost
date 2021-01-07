import React, { useState, useEffect } from 'react';
import Header from '../header/Header'; 

import Pagination from '../pagination/Pagination'; 
import './SearchResults.scss'; 
import defaultimage from '../../assets/default-image.png'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './productList';


const SearchResults = (results) => {

    //jag måste modifiera list för att skicka den till productList, som renderar ut den
    const { list } = results; 

    const [productState, setProductState] = useState(0);
    const [newProductList, setNewProductList] = useState([]); 

    // // //pagination
    // const [currentPage, setCurrentPage] = useState(1); 
    // const [itemsPerPage] = useState(12); 

    // // //get index of the last post 
    // const indexOfLastItem = currentPage * itemsPerPage; 
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    // let currentList = list.slice(indexOfFirstItem, indexOfLastItem); //the items we limit page to 
    // // //den här listan är tom från början, visa inte den visa original-listan. 

    // // //change page on click 
    // const createPagination = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // }; 

    //recieve slidervalue from filter-component
    const newList = (sliderValue) => {
        setNewProductList(list.filter(item => item.calculated_consuvalue >= sliderValue));
        console.log('newPL in SR',  newProductList);
        setProductState(sliderValue); 
    }; 


  return (
      <>
        <section className="page products">
            <Header props='Results' /> 
            <div className="page__sort">
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
            <div className="page__filter">
                <FilterProducts func={newList} /> 
            </div>
            {productState >= 1
                ? <ProductList products={newProductList} state={productState} />
                : <ProductList products={list} state={productState} />
            }
            {/* <Pagination 
                itemsPerPage={itemsPerPage} 
                totalList={list.length} 
                paginate={createPagination}
                activePage={currentPage} 
            /> */}
        </section>
      </>
  );
}

export default SearchResults;

// if(results === []) {
//     return <h2>Loading results...</h2>
// } else {
//     return(); 
// }

{/* <ul className="products__list">
{ 
    currentList.map((item)=> {
        let img_url = item.image_url; 
    
        return (
            <li className="products__item" key={item.id}>
                <div className="card-image">
                    <img 
                    src={
                            (img_url == null) ? `${defaultimage}` : `${img_url}`
                        } 
                        alt="Product"
                    />
                </div>
                <div className="product-card-info">
                    <h6>{item.name}</h6>
                    <p>{item.calculated_consuvalue}</p>
                    <a href={'/search/result/'+item.id}> Read more</a>
                </div> 
            </li>
        )
    })  
}
</ul>   */}