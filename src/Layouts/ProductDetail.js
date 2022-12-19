import React, { Component, useEffect, useRef } from 'react';
import Header from './Header';
import SubHeader from '../Components/SubHeader';
import ProductDetailContent from '../Components/ProductDetailContent';
import { setSelectedProduct , useProductDispatch ,useProductState } from '../context/ProductContext';


const ProductDetail = (props) => {
    const context = useProductState();
    const useContext = useProductDispatch();

    useEffect(() =>{
        let search = new URLSearchParams(window.location.search)
        let id = search.get('pCode')
        setSelectedProduct(useContext , id)
    } , [])

   

    
    return (
        <>
            {/* <Header bg='crimson' pos='relative'/> */}
            <SubHeader />
           
            {
                context.product.selectedProduct 
                &&
                context.product.selectedProduct.map(product => {
                    return (<ProductDetailContent data={product} key={product.id} />)
                })
            }
            
        </>
    );
    
}


export default ProductDetail ;