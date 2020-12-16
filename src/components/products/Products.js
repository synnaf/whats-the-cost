import React from 'react';
import {
    getProductByCode,
    searchIngredient,
    getById,
    getUserToken,
    getByEndPoint,
    makePostRequest,
    makeDeleteRequest,
    makeApiRequest,
    getProduct,
    searchProduct,
    getUser,
    clearStorage,
    getUserPrimary,
    createUser,
    getStudentProduct
  } from '../search/Search'; 

const Products = () => {

    searchProduct('test').then((result) => {
        console.log('result', result.data)
    }); 

  return (
    <div className="Products">
        This is products 
    </div>
  );
}

export default Products;
