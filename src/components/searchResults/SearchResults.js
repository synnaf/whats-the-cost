import React, { useState, useEffect } from 'react';
import Header from '../header/Header'; 

import Pagination from '../pagination/Pagination'; 
import './SearchResults.scss'; 
import defaultimage from '../../assets/default-image.png'; 


const SearchResults = (results) => {

    console.log('this is results in searchresults', results.list); 
    //det är ett props-objekt, jag vill ha min lista :(

    const { list } = results; 
    
    //paginati0n
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(12); 

    //get index of the last post 
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    const currentList = list.slice(indexOfFirstItem, indexOfLastItem); //the items we limit page to 

    //change page on click 
    const createPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }; 


  return (
      <>
        {/* <Header props='Results' />  */}
        <section className="page products">
            <div className="page__sort">
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
            <ul className="products__list">
                { 
                    currentList.map((item)=> {
                        let img_url = item.image_url; 
                        console.log(item); 
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
                                    {/* <span>X X X</span> */}
                                    {/* <button type="button"                             
                                        onClick={(e) => (
                                            <Product props={e} />
                                    )}>test</button> */}
                                    <a href={'/search/result/'+item.id}> Read more</a>
                                </div> 
                            </li>
                        )
                    })  
                }
            </ul>  
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalList={list.length} 
                paginate={createPagination}
                activePage={currentPage} 
            />
        </section>

      </>

  );
}

export default SearchResults;

// if(results === []) {
//     return <h2>Loading results...</h2>
// } else {
//     return(); 
// }