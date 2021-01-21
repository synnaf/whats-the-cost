import React from 'react';
import './Pagination.scss'; 

const Pagination = ({itemsPerPage, totalList, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalList / itemsPerPage ); i++) {
        pageNumbers.push(i);
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