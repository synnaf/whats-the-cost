import React, { useState } from 'react';
import './FilterProducts.scss'; 


const FilterProducts = (props) => {

    const [sliderValue, setSliderValue] = useState(0); 
    const [sliderValue2, setSliderValue2] = useState(0); 
    // const [replaceSLider, setReplaceSLider] = useState('Non-vegan'); //toggle three values 

    //TODO: värden för alla sliders 
    function updateValue(e) {
        setSliderValue(e.target.value); 
        props.func(sliderValue); 
    }; 
    
    function updateValue2(e) {
        let rangeValue = e.target.value;
        setSliderValue2(rangeValue); 
     
        // let rangeSlider =  document.querySelector('#myRange2');     
        //switch slider 
        // eslint-disable-next-line default-case
        //rangeValue == 0; 
        //rangeValue == 15;
        //rangeValue == 30;
    }; 

    // function sliderOutputUpdate() {
    //     let rangeOutput =  document.querySelector('#output');
    //     if (sliderValue2 == 30) {
    //         setReplaceSLider('Vegan'); 
    //     } else {
    //         setReplaceSLider('Veg'); 
    //     }

    //     let options = ['Vegan', 'Veg', 'Meats']; 


    // }


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
                        <input type="range" min="0" max="30" step="15" value={sliderValue2} className="slider" name="slide2" id="myRange2" 
                            onChange={updateValue2}
                            list="mR2"
                        />
                        </div>
                        {/* <output htmlFor="slide2" id="output">{replaceSLider}</output> */}
                    </li>

                    <li className="filter__item">
                        <label htmlFor="slide3">Impact on Democracy</label>
                        <input type="range" min="0" max="100" value="50" className="slider" name="slide3" id="myRange" />
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