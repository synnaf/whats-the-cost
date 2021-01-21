import React, { useState, useContext, useEffect } from 'react';
import Header from '../header/Header'; 
import FilterProducts from '../filterProducts/FilterProducts';
import ProductList from './ProductList';
import './SearchResults.scss'; 
import { ValueContext } from '../main/ValueContext';


const SearchResults = (results) => {
    const { list } = results; 
    const {values, setValues} = useContext(ValueContext); 
    const [available, setAvailable] = useState([]); 
    const [filteredList, setfilteredList] = useState([]);
    const [sortOptions, setSortOptions] = useState(false);  

    useEffect(()=> {
        setAvailable(list); 
    },[list]); 

    useEffect(()=> {
        setfilteredList(available); 

        if(values.consuvalue > 0) {
            let cvArr = available.filter((item)=> {
                return item.calculated_consuvalue >= values.consuvalue; 
            })
            setfilteredList(cvArr); 
        }

        if(values.animalvalue > 0) {
            let cvArr = available.filter((item)=> {
                return item.is_vegetarian === 1; 
            })
            if(values.animalvalue > 1) {
                cvArr = available.filter((item)=> {
                    return item.is_vegan === 1; 
                })
            } 
            setfilteredList(cvArr); 
        }

        if(values.animalvalue > 0 && values.consuvalue > 0) {

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
                setfilteredList(firstArr); 
            } 

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
                setfilteredList(secondArr);   
            }
        }  
    },[values]); 

    useEffect(()=> {
        setSortOptions(false); 
    }, [sortOptions])

    const sortArray = (e) => {
        setSortOptions(!sortOptions); 
    
        if(e.target.value == 'abc') {
            let sorting = available.sort((a, b) => {
                if(a.name < b.name) {
                     return -1; 
                }
                 return 0; 
             })
        }  else {
            let sorting; 
            if(e.target.value == 'cba') {
                sorting = available.sort((a, b) => {
                    if(a.name > b.name) {
                         return -1;  
                    }
                     return 0; 
                 })
            } else {
                return; 
            }
            return sorting; 
        }
    }; 
    
    return (
        <>
            <section className="page products">
                <div className="page__header">
                    <Header props='Results' /> 
                    <div className="page__sort">
                        <select className="sort-options" onChange={(e) => sortArray(e)}>
                            <option defaultChecked>
                                Sort options 
                            </option>
                            <option value="abc">
                                Sort A-Ö 
                            </option>
                            <option value="cba">
                                Sort Ö-A
                            </option>
                        </select>
                    </div>   
                </div>
                <div className="page__filter">
                    <FilterProducts /> 
                </div> 
                {available.length == 0 || filteredList.length == 0
                    ?  <h3>No results</h3>
                    : <ProductList products={filteredList} />
                }
                    
            </section>
        </>
    );
}

export default SearchResults;
