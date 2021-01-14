import React, { useState, useEffect, useContext } from 'react';
import { ValueContext } from '../main/ValueContext';
import './FilterProducts.scss'; 


const FilterProducts = (props) => {

    const [sliderValue, setSliderValue] = useState(0); 
    const [sliderValue2, setSliderValue2] = useState(0); 

    const {values, setValues} = useContext(ValueContext); 


    useEffect(() => {
        props.func(

            setValues({consuvalue: sliderValue, animalvalue: sliderValue2})
            
        ); 
       
    }, [sliderValue, sliderValue2]);


    const updateValue = (e) => {
        setSliderValue(e.target.value); 
    }; 
    
    const updateValue2 = (e) =>  {
        setSliderValue2(e.target.value); 
    }; 

    console.log(sliderValue, sliderValue2); 


    return (
        <>
            <div className="filter__values">
                <ul className="filter__list">
                    <li className="filter__item">
                        <label htmlFor="slide1">ConsuValue</label>
                        <input type="range" min="0" max="100" value={sliderValue} className="slider" name="slide1" id="myRange" 
                            onChange={updateValue} 
                        />
                    </li>
                    <li className="filter__item --custom">    
                        <label htmlFor="slide2">Impact on animals</label>
                        <div className="--custom__wrapper">
                        <datalist id="mR2">
                            <option>Unknown</option>
                            <option>Veg.</option>
                            <option>Vegan</option>
                        </datalist>
                        <input type="range" min="0" max="2" step="1" value={sliderValue2} className="slider" name="slide2" id="myRange2" 
                            onChange={updateValue2}
                            list="mR2"
                        />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default FilterProducts;


    // useEffect(()=> {
    //     fetch("api/products/"+props.match.params.id) //hämta med produkt id från den klickade produkten?? 
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setProduct(result); 
    //         }
    //     ); 
    // }); 