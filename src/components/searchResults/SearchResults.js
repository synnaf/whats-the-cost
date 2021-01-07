import React, { useState } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 

const SearchResults = (results) => {
    const { list } = results; 

    const [productState, setProductState] = useState(0);
    const [newProductList, setNewProductList] = useState([]); 

    //recieve slidervalue from filter-component
    const newList = (sliderValue) => {
        setNewProductList(list.filter(item => item.calculated_consuvalue >= sliderValue));
        setProductState(sliderValue); 
    }; 

    if(list == []) {
        return <h2>Loading results...</h2>
    } else {
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
                </section>
            </>
        );
    }
}

export default SearchResults;

