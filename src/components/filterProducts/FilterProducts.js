import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './FilterProducts.scss'; 
// import { getProduct } from '../search/api'; 

//load product dynamically

const FilterProducts = (props) => {

    //en array av alla objekt från sökningen 
    const [sliderValue, setSliderValue] = useState(0); 

    //vad sker i denna komponent? 
    //när komponenten renderas så har vi tillgång till listan i föräldern genom props. 
    //vi tar emot en funktion som ändrar storleken på listan? 
    //en funktion som 

    function updateValue(e) {
 
        setSliderValue(e.target.value); //dubbelkolla så att man uppdaterar korrekt value med name 
        // updateList(); 
        props.func(sliderValue); 
    } 

  return (
        <>
            <div className="filter__values">
                <ul className="filter__list">
                    <li className="filter__item">
                        <label htmlFor="slide1">ConsuValue</label>
                        <input type="range" min="0" max="100" value={sliderValue} class="slider" name="slide1" id="myRange" onChange={updateValue} />
                    </li>
                    <li className="filter__item">    
                        <label htmlFor="slide2">Impact on Environment</label>
                        <input type="range" min="0" max="100" value="10" class="slider" name="slide2" id="myRange" />
                    </li>
                    <li className="filter__item">
                        <label htmlFor="slide3">Impact on Democracy</label>
                        <input type="range" min="0" max="100" value="50" class="slider" name="slide3" id="myRange" />
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