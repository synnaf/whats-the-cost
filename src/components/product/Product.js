import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Product.scss'; 
import { getProduct } from '../search/api'; 

//load product dynamically

const Product = (props) => {

    const [product, setProduct] = useState({}); 
    // const history = useHistory(); 

    // console.log('this is props from parent', props); 
    // console.log(history); 
  
    //in useEffect: 
    //+props.match.params.id match the id and the object 
    useEffect(()=> {
        getProduct(props.match.params.id)
        .then(res => {
            // let result = res.data.data;  
            // console.log(req); 
            console.log(res.data.data); 
            setProduct(res.data.data); 
            return; 
        })
    }, []); 

    const backToSearch = () => {
        console.log('close'); 
        props.history.replace('/search/:searchTerm'); 
    }

  return (
        <>
            <div className="product-card-details">
                <div className="product-card-info">
                    <div className="card-header">
                        <h6>{product.name}</h6>
                        <button type="button" onClick={backToSearch}>stäng</button> 
                    </div>
                    <div className="value-wrapper">
                        {/* loop and add content dynamically */}
                        <ul>
                            <li>
                                <label htmlFor="slide1">Slide 1</label>
                                <input type="range" min="1" max="100" value="50" class="slider" name="slide1" id="myRange" />
                            </li>
                            <li>    
                                <label htmlFor="slide2">Slide 2</label>
                                <input type="range" min="1" max="100" value="50" class="slider" name="slide2" id="myRange" />
                            </li>
                            <li>
                                <label htmlFor="slide3">Slide 3</label>
                                <input type="range" min="1" max="100" value="50" class="slider" name="slide3" id="myRange" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="placeholder">
                    <h5>Price: 100kr</h5>
                    <img src="https://picsum.photos/200/300"/>
                    {/* change value dynamically with props */} 
                </div>

            </div>
        </>
  );
}

export default Product;


    // useEffect(()=> {
    //     fetch("api/products/"+props.match.params.id) //hämta med produkt id från den klickade produkten?? 
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setProduct(result); 
    //         }
    //     ); 
    // }); 