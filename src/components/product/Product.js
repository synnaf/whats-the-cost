import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { getProduct } from '../search/api'; 
import './Product.scss'; 

const Product = (props) => {

    const [product, setProduct] = useState({}); 
    // const history = useHistory(); 
  
    //in useEffect: 
    //+props.match.params.id match the id and the object 
    useEffect(()=> {
        getProduct(props.match.params.id)
        .then(res => {
            setProduct(res.data.data); 
            return; 
        })
    }, []); 

    //TODO: fixa denna funkar ej 
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