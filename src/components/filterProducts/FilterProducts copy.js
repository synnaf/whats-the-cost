import React, { useState, useEffect } from 'react';
import './FilterProducts.scss'; 


const FilterProducts = (props) => {

    //TODO: destrucutre props och plocka bara ut funktionerna jag vill ha 

    const [sliderValue, setSliderValue] = useState(0); 
    const [sliderValue2, setSliderValue2] = useState(0); 
    // const [replaceSLider, setReplaceSLider] = useState('Non-vegan'); //toggle three values 

    useEffect(() => {
       //code t be executed  
        props.func(sliderValue); 
        props.func2(sliderValue2);  
 
    }, [sliderValue, sliderValue2]);


    const updateValue = (e) => {
        console.log(e); 
        let range = e.target.name;
        console.log(range); 
        setSliderValue(e.target.value, range); 
        // props.func(sliderValue); 
    }; 
    
    const updateValue2 = (e) =>  {
        let range = e.target.name;
        console.log(range); 
        let rangeValue = e.target.value;
        setSliderValue2(rangeValue, range); 
        // props.func2(sliderValue2);  
    }; 


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