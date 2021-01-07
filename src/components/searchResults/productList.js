import React, { useState } from 'react';
import defaultimage from '../../assets/default-image.png'; 
import Pagination from '../pagination/Pagination'; 


const ProductList = (results) => {
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