import React, { useState, useContext, useEffect } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 
import { ValueContext } from '../main/ValueContext';



const SearchResults = (results) => {
    const { list } = results; 
    const [ productState, setProductState ] = useState([]);
    //what ve can get from our context 
    const {values, setValues} = useContext(ValueContext); 
    console.log('VALUES CONTEXT', values);
    
    //skicka med listan i ett state
    const [available, setAvailable] = useState([]); 

    //rendera med det som finns i available, för sökningen 
    useEffect(()=> {
        setAvailable(list); 
    },[list]); 

    //en useeffect för values, som uppdaterar om den uppdaterar values 
    useEffect(()=> {

        //Kontrollera om ett värde finns i en array
        //returnerar true eller false 
        let findValue; 
        let filterProducts; 

        const checkAv = (list, val) => {
            console.log(val); //0 
        
            if(val.consuvalue > 0) {
                //consuvalue was used
                console.log('consu', val); 
                // filterProducts = list;  
                filterProducts = list.filter((item) => (item.calculated_consuvalue >= val.consuvalue)); 

            } else {
                //animalvalue was used 
                console.log('animal', val);
                // filterProducts = list; 
                
                if(val.animalvalue > 0 && !'null') {
                    filterProducts = list.filter((item) => (
                        item.is_vegetarian > 0)); 
                }
                if(val.animalvalue > 1 && !'null') {
                    filterProducts = list.filter((item) => (
                        item.is_vegan > 0)); 
                };

            }
        }
       
        checkAv(available, values);
        console.log(filterProducts); //innehåller hela listan åt nåt av värdena, visar när båda filtrerats separat 

    },[values]); 



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
                        <FilterProducts /> 
                    </div> 
                  
                        <ProductList products={available} />
               
                </section>
            </>
        );
    }
}

export default SearchResults;
