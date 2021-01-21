import React, { useEffect, useState } from 'react'; 
import { getProduct } from '../../search/api'; 
import './Product.scss'; 
import defaultimage from '../../../assets/default-image.png'; 

const Product = (props) => {
    const [product, setProduct] = useState({}); 

    useEffect(()=> {
        getProduct(props.product)
        .then(res => {
            setProduct(res.data.data); 
            return;  
        })  
    }, [props.product]);


    if(product === {}) {
        return <p>Loading product</p>
    } else {
    return (
        <>
            <div className="card">
                <div className="card__info">
                    <div className="card__title">
                        <h6>{product.name}</h6>
                        <button type="button" onClick={props.closePopup}>&times;</button> 
                    </div>
                    <div className="card__value">
                        <ul className="value__list">
                        <h6 className="value__title">ConsuValues Details</h6>
                            {product.consuvalues 
                                ? product.consuvalues.map((value) => {
                                    return (
                                        <li className="value__item"> 
                                            { value.label }: { value.calculated_value }
                                        </li>
                                    ); 
                                })
                                :  <p>Getting value...</p>      
                            }
                        </ul>
                        <ul className="value__list">
                            <h6 className="value__title">Allergy Details</h6>
                            {product.consuvalues 
                                ? product.allergies.map((value) => {
                                    return (<li className="value__item"> { value.name } </li>); 
                                })
                                :  <p>Getting value...</p>      
                            }
                        </ul>
                    </div>
                </div>
                <div className="placeholder">
                    <h5>Price: 100kr</h5>
                    <img 
                        src={
                                (product.image_url == null) ? `${defaultimage}` : `${product.image_url}`
                            } 
                        alt="Product"
                    />
                </div>
            </div>
        </>
    );
    }
}

export default Product;