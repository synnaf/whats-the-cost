import React, { useState } from 'react';
import defaultimage from '../../assets/default-image.png'; 
import Pagination from '../pagination/Pagination'; 


const ProductList = (results) => {
    console.log('RESULTS RECIEVED:', results);
    const { products } = results;

    // //pagination
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(12); 

    // //get index of the last post 
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    let currentList = products.slice(indexOfFirstItem, indexOfLastItem); 

    // //change page on click 
    const createPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }; 

    console.log('this is results from parent', results);

    return (
        <>
        <ul className="products__list">
            { 
                currentList.map((item)=> {
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
                                <a href={'/search/result/'+item.id} className="product__link">More</a>
                            </div> 
                        </li>
                    )
                })  
            }
        </ul>
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