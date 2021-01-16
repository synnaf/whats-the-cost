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
    const [filteredList, setfilteredList] = useState([]); 

    useEffect(()=> {
        setAvailable(list); 
    },[list]); 

    useEffect(()=> {

        //1. inget filter valt gör inget?? denna kommer inte köras då
        
        setfilteredList(available); 
        
        //2. ett filter valt -------------------

        if(values.consuvalue > 0) {
            console.log('co!'); 
            let cvArr = available.filter((item)=> {
                    return item.calculated_consuvalue >= values.consuvalue; 
            })
            //innehåller filtrerade objekten 
            console.log(cvArr); 
            setfilteredList(cvArr); 
        }

        if(values.animalvalue > 0) {
            let cvArr = available.filter((item)=> {
                return item.is_vegetarian === 1; 
            })
            //does this need another value?? 
            if(values.animalvalue > 1) {
                cvArr = available.filter((item)=> {
                    return item.is_vegan === 1; 
                })
            } 
            //innehåller filtrerade objekten 
            console.log(cvArr); 
            setfilteredList(cvArr); 
        }

        //3. båda filter valda --------------------

        if(values.animalvalue > 0 && values.consuvalue > 0) {
            
            //om cv valdes först
            if(values.consuvalue > 0) {
                let firstArr = available.filter((item)=> {
                    return item.calculated_consuvalue >= values.consuvalue; 
                    });
                    
                    if(values.animalvalue == 1){
                        firstArr.filter((item) => {
                            return item.is_vegetarian === 1;
                        })
                    };
                    if(values.animalvalue == 2){
                        firstArr.filter((item) => {
                            return item.is_vegan === 1;
                        })
                    };  

                console.log(firstArr);
                setfilteredList(firstArr); 
            } 
            //om animal valdes först 
            if(values.animalvalue > 0) {
                let secondArr = available.filter((item)=> {
                        if(values.animalvalue == 1) {
                            return item.is_vegetarian === 1;
                        }
                        if(values.animalvalue == 2) {
                            return item.is_vegan === 1;
                        }
                    }).filter((item)=> {
                        return item.calculated_consuvalue >= values.consuvalue;   
                    })    
                console.log(secondArr); 
                setfilteredList(secondArr);   
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
                        <ProductList products={filteredList} />
                </section>
            </>
        );
}

export default SearchResults;
