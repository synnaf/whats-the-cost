import React, { useState, useContext, useEffect } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 
// import { ListContext } from '../main/ListContext';
import { ValueContext } from '../main/ValueContext';


const SearchResults = (results) => {
    const { list } = results; 
    const [ productState, setProductState ] = useState(0);
    //what ve can get from our context 
    const {values, setValues} = useContext(ValueContext); 
    console.log('VALUES CONTEXT', values);
    
    
    //skicka med listan i ett state
    const [available, setAvailable] = useState([]); 


    //rendera med det som finns i available 
    useEffect(()=> {
        setAvailable(list); 
    },[list]); 




// if(valueA || valueB || valueC) 
// då är det som some()

// if(valueA && valueB && valueC)
// är every()

/*

Jag vill kontrollera om min array innehåller värden, utifrån filtrena 

Innehåller min array värden ConsuValue? values.consuvalue
Innehåller min array värden AnimalsValue? values.animalvalue

item.calculated_consuvalue > values.consuvalue
item.is_animal  --- animalvalue 0
item.is_vegetarian  --- animalvalue  1
item.is_vegan --- animalvalue 2

OM filter nr.1 OCH filter nr.2 är på setting 0, visa originallistan 
if(values.consuvalue && values.animalvalue === 0) { }
----------------------

OM filter nr.1 ELLER filter nr.2 har ändrats från setting 0,  
if(values.consuvalue || values.animalvalue > 0) { 

    //kontrollera vilket av värdena det är
    if(values.consuvalue > 0) {
        lägg på filter 
    } else {
        lägg på ett annat filter 
    }

    sätt filtret 

}


OM filter nr.1 OCH filter nr.2 har ändrats från setting 0, 
if(values.consuvalue && values.animalvalue > 0) { }

*/

    
    //den här funktionen borde inte köras om inte ett filter ändras
    const newList = () => {

        // /* CREATE A FILTER */
        // console.log(values.consuvalue); //contains slidervalue 
        // console.log(values.animalvalue); //contains slidervalue 
        // let cv = values.consuvalue; 
        // let av = values.animalvalue; 

        // //om någon av filtrena har ändrats så ska en ny lista skapas 
        // if(cv || av > 0) {

        // }; 

    }; 

    console.log('LIST::AFTER functions', available); 


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
                        <FilterProducts func={newList} /> 
                    </div> 
                  
                        <ProductList products={available} />
               
                </section>
            </>
        );
    }
}

export default SearchResults;
