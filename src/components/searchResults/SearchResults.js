import React, { useState, useReducer, useContext } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 
import { ListContext } from '../main/ListContext';



const SearchResults = (results) => {
    const { list } = results; 
    const [productState, setProductState] = useState(0);

    //what ve can get from our context 
    const {available, setAvailable} = useContext(ListContext);

    //recieve slidervalue from consuvalue-component
    const newList = (sliderValue) => {
        console.log('sliderValue recieved from consuvalue', sliderValue);
        setAvailable(list.filter(item => item.calculated_consuvalue >= sliderValue));
        setProductState(sliderValue); 
    }; 

    //recieve slidervalue from animal-component 
    const animalList = (sliderValue) => {
        console.log('sliderValue recieved from animal', sliderValue);
        if(sliderValue > 0) {
            setAvailable(list.filter(item => item.is_vegetarian == 1));
            setProductState(sliderValue); 
        } else {
            console.log('vego'); 
        }
        if(sliderValue > 1) {
            setAvailable(list.filter(item => item.is_vegan == 1));
            setProductState(sliderValue); 
        } else {
           console.log('vegan'); 
     
        }
    }; 


    if(list === []) {
        return <h2>Loading results...</h2>
    } else {
        return (
            <>
                <section className="page products">
                    <div className="page__header">
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
                    </div>
                    <div className="page__filter">
                        <FilterProducts func={newList} func2={animalList}/> 
                    </div>
                    {/* {productState >= 1
                        ? <ProductList products={available} state={productState} />
                        : <ProductList products={list} state={productState} />
                    } */}
    
                    <ProductList products={available} state={productState} />
                    
                </section>
            </>
        );
    }
}

export default SearchResults;
