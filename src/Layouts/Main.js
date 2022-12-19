import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useProductState , useProductDispatch } from '../context/ProductContext';

const Main = () => {
    
    const context = useProductState()
    const useContext = useProductDispatch()
    return (
        <div className='main'>
            <div className='main-header'>
                <div className='main-header-title'>
                    <h1>فروشگاه همگو</h1>
                    <p>خرید با کیفیت</p>
                </div>
            </div>

            <div className='main-content' >
                <div className='main-content-banner'>
                    <h4>برای دیدن محصولات کلیک کنید</h4>
                </div>
                <div className='main-content-btn'>
                    <Link to='/products' ><button className='main-buttons'>دیدن محصولات</button></Link>
                </div>
            </div>
        
        </div>
    );
    
}

export default Main;