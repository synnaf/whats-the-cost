import React, { useState, useContext, useEffect } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 
import { ValueContext } from '../main/ValueContext';



const SearchResults = (results) => {
    const { list } = results; 
    const [ productState, setProductState ] = useState([]);
    const {values, setValues} = useContext(ValueContext); 
    const [available, setAvailable] = useState([]); 

    //rendera med det som finns i available, för sökningen 
    useEffect(()=> {
        setAvailable(list); 
    },[list]); 

    //en useeffect för values, som uppdaterar om den uppdaterar values 
    useEffect(()=> {

        //1. inget filter valt  gör inget?? denna kommer inte köras då
        
        //2. ett filter valt
            //2.a vilket filter är valt?
            if(values.consuvalue > 0) {
                console.log('co!'); 
                let cvArr = available.filter((item)=> {
                        return item.calculated_consuvalue >= values.consuvalue; 
                })
                //innehåller filtrerade objekten 
                console.log(cvArr); 
            }
            
            if(values.animalvalue > 0) {
                console.log('an!'); 
                //kontrollera is vegan och is vego sen!
                let cvArr = available.filter((item)=> {
                    return item.is_vegetarian === 1; 
                })
                //innehåller filtrerade objekten 
                console.log(cvArr); 
            }


        //3. båda filter valda
        if(values.animalvalue > 0 && values.consuvalue > 0) {
            //3a vilket filter fick värdet först?
            //om cv valdes först
            if(values.consuvalue > 0) {
                let firstArr = available.filter((item)=> {
                    return item.calculated_consuvalue >= values.consuvalue; 
                    }).filter((item) => {
                        return item.is_vegetarian === 1;
                    })
                console.log(firstArr); 
            } 
            //om animal valdes först 
            if(values.animalvalue > 0) {
                let secondArr = available.filter((item)=> {
                        return item.is_vegetarian === 1;
                    }).filter((item)=> {
                        return item.calculated_consuvalue >= values.consuvalue; 
                        
                    })    
                console.log(secondArr);    
            }

            

        }
        

    },[values]); 

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

export default SearchResults;
