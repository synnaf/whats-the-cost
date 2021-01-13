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
    

    const newList = () => {
        // setProductState(sliderValue); 
        /* CREATE A FILTER */
        console.log(values.consuvalue); //contains slidervalue 
        console.log(values.animalvalue); //contains slidervalue 

        if(values.consuvalue > 0) {
            //filtrera först bort calculated_consuvalue 
            let consList = list.filter(item => item.calculated_consuvalue > values.consuvalue);

            //kontrollera sedan vad värdet på animal filter är 
            if(values.animalvalue === 1) {
                //filtrera bort de som INTE är animal från consList 
                let vegoList = consList.filter(item => item.is_vegetarian === 1 & item.is_animal === 0 || 1);
                
                if(values.animalvalue === 2) {
                    //check if vegan! 
                    let veganList = vegoList.filter(item => item.is_vegan === 1);
                    setAvailable(veganList); 
                } else {
                    //annars, sätt vegetarian list 
                    setAvailable(vegoList); 
                }

        } else {

            //om inget ovan, set med ursprungliga listan  
            setAvailable(consList); 
        
        }; 
    
            
        }; 

        // if(values.animalvalue > 0) {
        //     //filtrera först bort de som har YES på is_animal 
        //     let aniList = list.filter(item => item.is_animal == 0);
        //     setAvailable(aniList); 
        // }; 

        // if(values.animalvalue > 0 && values.consuvalue == 0) {
        //     setAvailable(list.filter(item => item.is_vegetarian == 1 && item.is_vegan == 0 )); 
        // }; 
        // if(values.animalvalue > 0 && values.consuvalue > 0) {
        //     setAvailable(list.filter(item => 
        //         item.is_vegetarian == 1 && 
        //         item.is_vegan == 0 || null && 
        //         item.calculated_consuvalue >= values.consuvalue)); 
        // }; 
        // //find vegan values when other slider is 0 
        // if(values.animalvalue > 1 && values.consuvalue == 0) {
        //     setAvailable(list.filter(item => item.is_vegan == 1 && item.calculated_consuvalue >= values.consuvalue)); 
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
