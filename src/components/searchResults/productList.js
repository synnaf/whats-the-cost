import React, { useState } from 'react';
import defaultimage from '../../assets/default-image.png'; 
import Pagination from '../pagination/Pagination';
import Product from './product/Product'; 


const ProductList = (results) => {
    console.log('RESULTS RECIEVED PL:', results);
    const { products } = results;

    // //pagination
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(12); 

    //popup
    const [popup, setPopup] = useState({id: '', state: false}); 

    // //get index of the last post 
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    let currentList = products.slice(indexOfFirstItem, indexOfLastItem); 

    //change page on click 
    const createPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }; 

    //ta emot product-id
    const productPopup = (t) => {
        console.log(t); 
        setPopup({id:t, state:true}); 
        let backg = document.getElementById('productList'); 
        backg.style.filter = 'blur(3px)';
    }; 

    const closePopup = () => {
        setPopup({state:false});
        let backg = document.getElementById('productList'); 
        backg.style.filter = '';
    }; 

    return (
        <>
        <ul className="products__list" id="productList">
            { 
                products.map((item)=> {
                    let img_url = item.image_url; 
                
                    return (
                        <li className="product" key={item.id}>
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
                                {/* <p>{item.calculated_consuvalue}</p> */}
                                {/* <p>{item.is_animal}</p> */}
                                {/* <a href={'/search/result/'+item.id} className="product__link">More</a> */}
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
         

        {/* {  products.length > itemsPerPage ?
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalList={products.length} 
                paginate={createPagination}
                activePage={currentPage} 
            />
            : null
        }   */}
        </>
    );
}

export default ProductList;