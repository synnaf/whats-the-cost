import React, { useState, useEffect } from 'react';
import defaultimage from '../../assets/default-image.png'; 


const ProductList = (results) => {
    const { products } = results;

    console.log('this is results from parent', results);

    return (
        <ul className="products__list">
            { 
                products.map((item)=> {
                    let img_url = item.image_url; 
                
                    return (
                        <li className="products__item" key={item.id}>
                            <div className="card-image">
                                <img 
                                src={
                                        (img_url == null) ? `${defaultimage}` : `${img_url}`
                                    } 
                                    alt="Product"
                                />
                            </div>
                            <div className="product-card-info">
                                <h6>{item.name}</h6>
                                <p>{item.calculated_consuvalue}</p>
                                <a href={'/search/result/'+item.id}> Read more</a>
                            </div> 
                        </li>
                    )
                })  
            }
        </ul>  
    );
}

export default ProductList;