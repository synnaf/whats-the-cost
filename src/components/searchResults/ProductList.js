import React, { useState } from 'react';
import defaultimage from '../../assets/default-image.png'; 
import Pagination from '../pagination/Pagination';
import Product from './product/Product'; 
import heart from '../../assets/svg/heart-shape-rounded-edges-variant-with-white-details.svg'; 

const ProductList = (results) => {
    const { products } = results;
    const [popup, setPopup] = useState({id: '', state: false}); 

    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(12);     
    
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    let currentList = products.slice(indexOfFirstItem, indexOfLastItem); 

    const createPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }; 

    const productPopup = (t) => {
        setPopup({id:t, state:true}); 
        let backg = document.getElementById('productList'); 
        backg.style.filter = 'blur(3px)';
    }; 

    const closePopup = () => {
        setPopup({state:false});
        let backg = document.getElementById('productList'); 
        backg.style.filter = '';
    }; 

    const addLike = (e, item) => {

        let clicked = document.getElementById(`${item.id}`);
        clicked.classList.add('--liked'); 
    
        let likesArr = []; 
        let list = window.localStorage.getItem('likes'); 
        let likesInLS = JSON.parse(list); 

        if(list == null) {
            window.localStorage.setItem('likes', JSON.stringify(item));
        } else {
            let isArray = Array.isArray(likesInLS); 
            if(isArray === false) {
                likesArr.push(likesInLS); 
                likesArr.push(item); 
                window.localStorage.setItem('likes', JSON.stringify(likesArr));
            } else {
                likesInLS.push(item); 
                window.localStorage.setItem('likes', JSON.stringify(likesInLS)); 
            }
        }; 
    }; 

    return (
        <>
        <ul className="products__list" id="productList">
            { 
                currentList.map((item)=> {
                    let img_url = item.image_url;

                    return (
                        <li className="product" key={item.id}>
                            <button 
                            className="product__like" 
                            id={item.id} 
                            onClick={(e) => addLike(e, {title: item.name, id: item.id}) }
                            >
                                <img src={heart} alt="heart icon" className="icon__like" />
                            </button>
                            <div className="product__image">
                                <img 
                                    src={
                                            (img_url == null) ? `${defaultimage}` : `${img_url}`
                                        } 
                                    alt="Product"
                                />
                            </div>
                            <div className="product__info">
                                <h6 className="product__name">{item.name}</h6>
                                <button 
                                    type="button" 
                                    className="product__link"
                                    onClick={() => productPopup(item.id)}
                                >More</button>
                            </div> 
                        </li>
                    )
                })  
            }
        </ul>
        {   popup.state 
            ? 
                <Product product={popup.id} closePopup={closePopup} /> 
            : null
        }
        {  products.length > itemsPerPage ?
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalList={products.length} 
                paginate={createPagination}
                activePage={currentPage} 
            />
            : null
        }  
        </>
    );
}

export default ProductList;
