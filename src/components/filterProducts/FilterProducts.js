import React, { useState, useEffect, useContext } from 'react';
import { ValueContext } from '../main/ValueContext';
import './FilterProducts.scss'; 


const FilterProducts = (props) => {

    const [sliderValue, setSliderValue] = useState(0); 
    const [sliderValue2, setSliderValue2] = useState(0); 

    const {values, setValues} = useContext(ValueContext); 

    useEffect(() => {
        setValues({consuvalue: sliderValue, animalvalue: sliderValue2})
    }, [sliderValue, sliderValue2]);


    const updateValue = (e) => {
        setSliderValue(e.target.value); 
    }; 
    
    const updateValue2 = (e) =>  {
        setSliderValue2(e.target.value); 
    }; 

    return (
        <>
            <div className="filter__values">
                <ul className="filter__list">
                    <li className="filter__item">
                        <label htmlFor="consuv">ConsuValue</label>
                        <input type="range" min="0" max="100" value={sliderValue} className="slider" name="consuv" id="consuRange" 
                            onChange={updateValue} 
                        />
                    </li>
                    <li className="filter__item --custom">    
                        <label htmlFor="animv">Impact on animals</label>
                        <div className="--custom__wrapper">
                        <datalist id="aRange">
                            <option>Unknown</option>
                            <option>Veg.</option>
                            <option>Vegan</option>
                        </datalist>
                        <input type="range" min="0" max="2" step="1" value={sliderValue2} className="slider" name="animv" id="animRange" 
                            onChange={updateValue2}
                            list="aRange"
                        />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default FilterProducts;
