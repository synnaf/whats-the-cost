import React from 'react';
import './Pagination.scss'; 

const Pagination = ({itemsPerPage, totalList, paginate, activePage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalList / itemsPerPage ); i++) {
        pageNumbers.push(i); //gives us the number of pages to create 
    }

    if(pageNumbers.length > 2) {
        let pageLink = document.getElementsByClassName('pagination__link');
        
        let pageX = pageLink.item(activePage - 1); 
        // console.log(pageX); // är NULL tills man klickar på en link 
        // console.log(activePage);
        // console.log(pageLink);

        if (pageX == null) {
            console.log('null is returned');  
        } else {
            let num = pageX.innerHTML;
            if(num == activePage) {
                pageX.classList.toggle('--active');
                // console.log('pageX:', pageX); 
            } 
        }
    }

    return (
        <>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="pagination__item">
                            <a onClick={(e) => paginate(number, e)} 
                                className="pagination__link">
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