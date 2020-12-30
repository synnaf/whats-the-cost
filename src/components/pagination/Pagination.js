import React, { useState, useEffect } from 'react';


//recieve props from parent Search component 
const Pagination = ({itemsPerPage, totalList, paginate}) => {
    console.log(itemsPerPage, totalList); 
    const pageNumbers = []; 
    for(let i = 1; i <= Math.ceil(totalList / itemsPerPage ); i++) {
        pageNumbers.push(i); //gives us the number of pages to create 
    }
    console.log(pageNumbers); 

  return (
      <>
        <ul className="page">
            {
                pageNumbers.map(number => (
                    <li key={number} className="page__item">
                        <a onClick={() => paginate(number)}
                        
                        className="page__link">
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
      </>

  );
}

export default Pagination;