import React, { Component, useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeBasketProduct , fetchBasketItems , useProductDispatch } from '../context/ProductContext';
import Modal from '../Modal';


const BasketProducts = React.memo(({data}) => {
    const useContext = useProductDispatch()
    const [openModal , setOpenModal] = useState(false)


    return (
        <div className='basketbox-products'>
            <div className='basketbox-products-closeBtn'>
                <FontAwesomeIcon icon={faClose} onClick={() =>{
                    setOpenModal(!openModal)
                    // removeBasketProduct(data)
                    // fetchBasketItems(useContext)
                }} />

                <Modal open={openModal} onClose={()=> setOpenModal(false)}>
                    <div>آیا از حذف محصول مطمن هستید؟</div>
                    <div className="modal-btns"> 
                        <button onClick={()=>{
                            removeBasketProduct(data)
                            fetchBasketItems(useContext)
                        }}>بله</button>
                        <button onClick={()=>setOpenModal(false)}>نه</button>
                    </div>
                </Modal>
            </div>

            <div className='basketbox-products-photo'>
                <img src={data.image} />
            </div>

            <div className='basketbox-products-info'>
                <ul>
                    <li>{data.title}</li>
                    <li>{data.category}</li>
                    <li>تعداد <span>{data.counts}</span></li>
                    <li>$<span>{data.price}</span></li>
                    
                </ul>
            </div>
        </div>
    );
    
})




export default BasketProducts;