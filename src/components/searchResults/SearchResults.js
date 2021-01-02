import React, { useState, useEffect } from 'react';
import Header from '../header/Header'; 
import Product from '../product/Product';
import Pagination from '../pagination/Pagination'; 
import './SearchResults.scss'; 
import defaultimage from '../../assets/default-image.png'; 

// if(results === []) {
//     return <h2>Loading results...</h2>
// } else {
//     return(); 
// }

//recieve props from parent Search component 
const SearchResults = (results) => {
    //paginati0n
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(12); 
    /* destructure props till enbart det vi vill ha   */
    const { props } = results; 

    //get index of the last post 
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    const currentList = props.slice(indexOfFirstItem, indexOfLastItem); //the items we limit page to 

    //change page on click 
    const createPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
        // console.log(e.target.value); 
    }; 


  return (
      <>
        {/* <Header props='Results' />  */}
        <section className="page-container productlist">
            <div className="sort-products">
                <select className="sort-options">
                    <option>
                        Sort A-Z
                    </option>
                    <option>
                        Sort Z-A
                    </option>
                    <option>
                        Sort Test
                    </option>
                </select>
            </div>
            <ul className="product-list">
                { 
                    currentList.map((item)=> {
                        let img_url = item.image_url; 
                        console.log(item); 
                        return (
                            <li className="product-card" key={item.id}>
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
                                    {/* <span>X X X</span> */}
                                    <button type="button"                             
                                        onClick={(e) => (
                                            <Product props={e} />
                                    )}>More</button>
                                </div> 
                            </li>
                        )
                    })  
                }
            </ul>  
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalList={props.length} 
                paginate={createPagination}
                activePage={currentPage} 
            />
        </section>

      </>

  );
}

export default SearchResults;