import React, { useState, useReducer } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 

//SEBBES REDUCER
// let defaultValue = []; 
// const [myFormValues, setMyFormValues] = useReducer( 
//     //två parametrar skickas med först en anonym funktion, sedan värdet på state  
//     (state, newState) => ({ ...state, ...newState}), 
//     defaultValue //startvärdet på vårt state 
      
// );   

// upDate(e) { 
//     let element = e.target.name; //namnet på elementet  
//     let value = e.target.value; //värdet för elementet 
     
//     setMyFormValues({ [element]: value });  
// }
    


const SearchResults = (results) => {
    const { list } = results; 

    const [productState, setProductState] = useState(0);
    const [newProductList, setNewProductList] = useState([]); 

    //recieve slidervalue from filter-component
    const newList = (sliderValue) => {
        setNewProductList(list.filter(item => item.calculated_consuvalue >= sliderValue));
        setProductState(sliderValue); 
    }; 

    //recieve animal value from component 
    const animalList = (sliderValue) => {
        console.log('sliderValue recieved from animal', sliderValue); //updates accordingly  
        /*
        Skapa en filtrering för om värdet matchar Slidervärdet?
        Jag vill kunna ta emot två slider-värden, och skicka in i respektive funktion. 
        OM jag tar emot ett animal-värde, filtrera på det och skicka det som newProductList 
        */
       if(sliderValue == 0) {
            setNewProductList(list.filter(item => item.is_animal === 0 || null));
            console.log(newProductList); 
            setProductState(sliderValue); 
        } else {
            console.log('meat'); 
        } 
       if(sliderValue == 1) {
            setNewProductList(list.filter(item => item.is_vegetarian === 1));
            console.log(newProductList); 
            setProductState(sliderValue); 
        } else {
            console.log('vego'); 
        }
       if(sliderValue == 2) {
            setNewProductList(list.filter(item => item.is_vegan === 1));
            console.log(newProductList); 
            setProductState(sliderValue); 
       } else {
           console.log('vegaN'); 
       }


    //om det är djur, och sliderValue är djur, returnera listan 
        
            // //innehåller kött/djur när: 
            // list.filter(item => item.is_animal === 1 || null); 
        
            // //innehåller inget sånt när: 
            // list.filter(item => item.is_vegan === 1); 

            // //innehåller djurprodukter men inte kött när: 
            // list.filter(item => item.is_vegetarian === 1);  
       
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

    //dispatch är det som ska köras i newList och aimalList?? 
    // const handleChange = todo => {
    //     dispatch({ type: 'x', id: todo.id });
    // };   

    // {productState >= 1
    //     ? <ProductList products={newProductList} state={productState} />
    //     : <ProductList products={list} state={productState} />
    // }