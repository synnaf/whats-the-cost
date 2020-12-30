import React, { useState, useEffect } from 'react';
import Header from '../header/Header'; 
import Product from '../product/Product';
import Pagination from '../pagination/Pagination'; 
import './SearchResults.scss'; 

// if(results === []) {
//     return <h2>Loading results...</h2>
// } else {
//     return(); 
// }

//recieve props from parent Search component 
const SearchResults = (results) => {

    /* destructure props till enbart det vi vill ha   */
    const { props } = results; 

    //basic state to keep our result 
    // const [resultList, setResultLIst] = useState([]); 

    //paginatipn
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(12); 

    //get index of the last post 
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    const currentList = props.slice(indexOfFirstItem, indexOfLastItem); //the items we limit page to 
    
    console.log(currentList); //this is what we map over 

    //change page on click 
    const createPagination = pageNumber => setCurrentPage(pageNumber)

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
                        return (
                            <li className="product-card" key={item.id}>
                                <div className="card-image">
                                    <img src={item.image_url} alt="Product"/>
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
        </section>

        <Pagination itemsPerPage={itemsPerPage} totalList={props.length} paginate={createPagination} />
      </>

  );
}

export default SearchResults;