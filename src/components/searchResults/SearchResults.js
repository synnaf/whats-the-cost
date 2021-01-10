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
    console.log('this is avaliable in SR', available);
    console.log('this is list in SR', list);

    //recieve slidervalue from consuvalue-component
    const newList = (sliderValue) => {
        console.log('sliderValue consuvalue', sliderValue);
        setAvailable(list.filter(item => item.calculated_consuvalue >= sliderValue));
        setProductState(sliderValue); 

        // // 
        // list.some(checkNumber);
        // let nr = list.map(item => 
        //     item.calculated_consuvalue
        // ); 
        // function checkNumber(nr) {
        //     return nr >= sliderValue;
        // };         
        // for(let i=0; i < list.length; i++) {
        //     const v = (list[i].calculated_consuvalue); 
        //     //if this is true
        //     list.some(checkValue(v)); 
        // };
        // const checkValue = (v) => {
        //     return v >= sliderValue; 
        // }
    }; 

    //recieve slidervalue from animal-component 
    const animalList = (sliderValue) => {
        console.log('sliderValue animal', sliderValue);
        if(sliderValue > 0) {
            setAvailable(list.filter(item => item.is_vegetarian == 1));
            setProductState(sliderValue); 
        } else {
            // console.log('vego'); 
        }
        if(sliderValue > 1) {
            setAvailable(list.filter(item => item.is_vegan == 1));
            setProductState(sliderValue); 
        } else {
        //    console.log('vegan'); 
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
                                {/* array.sort() */}
                                <option>
                                    Sort A-Z 
                                </option>
                                <option>
                                    {/* array.sort() => array.reverse();  */}
                                    Sort Z-A
                                </option>
                            </select>
                        </div>   
                    </div>
                    <div className="page__filter">
                        <FilterProducts func={newList} func2={animalList}/> 
                    </div>    
                    <ProductList products={available} state={productState} />
                </section>
            </>
        );
    }
}

export default SearchResults;
