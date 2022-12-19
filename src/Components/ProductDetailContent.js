import React, { Component, useRef } from 'react';
import { addToCartProduct , useProductDispatch , fetchBasketItems } from '../context/ProductContext';



const ProductDetailContent = ({ data}) => {
    const useContext = useProductDispatch()
    
    
    return (
        <section className='productdetail'>
            <div className='productdetail-main'>

                <div className='productdetail-main-left'>
                    <img src={data.image } />    

                </div>

                <div className='productdetail-main-right'>
                    <div className='productdetail-main-right-title'>{data.title}</div>
                    <div className='productdetail-main-right-notic'>
                        <div className='prNotic productdetail-main-right-category'>{data.category}</div>
                        <div className='prNotic productdetail-main-right-price'>$ {data.price}</div>
                    </div>

                    <div className='productdetail-main-right-discription'>{data.description}</div>

                    <div className='productdetail-main-right-buyBtn'>
                        <button  type='submit' className='buyButton' onClick={() => {
                            addToCartProduct(data)
                            fetchBasketItems(useContext)
                            
                        }}>افزودن به سبد خرید</button>

                    </div>
                </div>

            </div>
        </section>
    );
    
}



export default ProductDetailContent ;