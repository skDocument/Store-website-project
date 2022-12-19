import { faCartShopping, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useContext, useEffect } from 'react';
import { fetchBasketItems , useProductDispatch , useProductState } from '../context/ProductContext';
import BasketProducts from './BasketProducts';



const SubHeader = React.memo(() => {
    const context = useProductState();
    const useContext = useProductDispatch();
    useEffect(()=> {
        fetchBasketItems(useContext)
    } , [])
        
    
    
    return (
        <div className='subHeader'>
            <div className='subHeader-searchBox'>
                <input type='text' className='searchInput' placeholder='نام محصول خود را جستجو کنید' />
                <FontAwesomeIcon icon={faSearch} />
            </div>
            
            <div className='subHeader-basket'>
                {
                    localStorage.length > 0 &&
                    (<span className='subHeader-basket-notif'>{context.basket.basketItemsTotalCount}</span>)
                }
                
                
                <div className='subHeader-basket-icon'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                
                <div className='subHeader-basket-count'>
                    <span>{context.basket.basketItemsTotalCount}</span> محصول
                </div>

                <div className='subHeader-basket-box'>

                    <div className='basketbox-totlaPrice'>
                        <div>
                            <span>جمع کل مبلغ : </span><span style={{color : 'crimson'}}>{context.basket.basketItemsTotlaPrice} $</span>
                        </div>
                        <div><span> {context.basket.basketItemsTotalCount} </span>  محصول </div>
                    </div>
                    
                    <div className='basketbox-productsWrapper'>
                        {
                            context.basket.basketItems
                            &&
                            context.basket.basketItems.map(item => {
                                return(<BasketProducts data={item} key={item.id} />)
                            })
                        }
                    </div>


                </div>

            </div>
        </div>
    );
    
})




export default SubHeader ;