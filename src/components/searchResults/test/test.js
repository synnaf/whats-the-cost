import React, { useState, useReducer } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 

const SearchResults = (results) => {
    const { list } = results; 

    const [productState, setProductState] = useState(0);
    // const [newProductList, setNewProductList] = useState([]); 

    //ursprungsvärdet är samma som sökresultatet 
    const initialList = [list]; 

    const reducerFunction = (initialList, action) => {

        switch (action.type) {
            case 'consuvalue' : 
                console.log('consuvalue', action); 
                //listan finns i action.reduceList 
                //uppdatera stateList med action.reduceList

                return action.reduceList; 
            case 'animal' : 
                console.log('animal', action);
                //listan finns i action.reduceList 
                //uppdatera stateList med action.reduceList

                return action.reduceList; 
            default: return initialList; 
        }; 
    };  

    //initalstate är ett objekt med ett värde
    const [stateList, dispatch] = useReducer(
        reducerFunction, 
        initialList
    ); 

    //recieve slidervalue from filter-component
    const newList = (sliderValue) => {

        //är från början värdet av initialList 
        //men när man drar i slidern så blir den undefined
        console.log('STATELIST CONS:', stateList); 

        // setNewProductList(list.filter(item => item.calculated_consuvalue >= sliderValue));
        setProductState(sliderValue); 

        //VAD VILL VI SKICKA upp till reducern? 
        // vi vill skicka alla objekt som uppfyller villkoret från slidern? 
        dispatch({type: 'consuvalue', reduceList: stateList.filter(item => item.calculated_consuvalue >= sliderValue)}); 
    
    }; 

    //recieve animal value from filter-component 
    //rewrite this with a switch/case statment? 
    const animalList = (sliderValue) => {
        console.log('sliderValue recieved from animal', sliderValue); //updates accordingly  
        setProductState(sliderValue); 
        console.log('STATELIST AN:', stateList); 

        switch (sliderValue) {
            case 0 : 
                console.log('animal 0');  
                let meat = stateList.filter(item => item.is_animal === 0 || null);
                return dispatch({type: 'animal', reduceList: meat});    
            case 1 : 
                console.log('animal 1');
                let veg = stateList.filter(item => item.is_vegetarian === 1); 
                return dispatch({type: 'animal', reduceList: veg}); ; 
            case 2 : 
                console.log('animal 2');
                let vegan = stateList.filter(item => item.is_vegan === 1); 
                return dispatch({type: 'animal', reduceList: vegan}); ; 
            default: return 0; 
        }; 

        /*
        Skapa en filtrering för om värdet matchar Slidervärdet?
        Jag vill kunna ta emot två slider-värden, och skicka in i respektive funktion. 
        OM jag tar emot ett animal-värde, filtrera på det och skicka det som newProductList 
        */
    }; 


    if(list === []) {
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
                        <FilterProducts func={newList} func2={animalList}/> 
                    </div>
                  
  
                        <ProductList products={stateList} state={productState} />
    
 
                    
                </section>
            </>
        );
    }
}

export default SearchResults;

    //dispatch är det som ska köras i newList och aimalList?? 
    // const handleChange = todo => {
    //     dispatch({ type: 'x', id: todo.id });
    // };   

    // {productState >= 1
    //     ? <ProductList products={newProductList} state={productState} />
    //     : <ProductList products={list} state={productState} />
    // }