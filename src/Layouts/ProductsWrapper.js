import React, { Component, useEffect } from 'react';
import Product from '../Components/Product';
import useSWR from 'swr';

import { Audio } from 'react-loader-spinner';
import { fetchAllProducts, useProductDispatch , useProductState } from '../context/ProductContext';
import axios from 'axios';

const ProductsWrapper = () => {
    // const context = useProductState()
    // const useContext = useProductDispatch()

    const {data , error , isLoading} = useSWR('https://fakestoreapi.com/products' )
    // useEffect(() => {
    //     fetchAllProducts(useContext)
    // } , [])
   
    
    return (
        <div className='productsWrapper'>
    
            {/* {
                context.product.products &&
                context.product.products.map(product => {
                    return(<Product data={product}  key={product.id} />)
                })
            } */}

            {
                isLoading && <Audio />
            }
            {
                error && <p>error is : {error}</p>
            }
            {
                data &&
                data.map(product => {
                    return(<Product data={product}  key={product.id} />)
                })
            }
        </div>
    );
    
}



export default ProductsWrapper ;