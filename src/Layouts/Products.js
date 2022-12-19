import React, { Component } from 'react';
import Header from './Header';
import SubHeader from '../Components/SubHeader';
import Banner from '../Components/Banner';
import ProductsWrapper from './ProductsWrapper';



class Products extends Component {

    render() {
        return (
            <div className='products'>
                {/* <Header bg='crimson' pos='relative'/> */}
                <SubHeader />
                <Banner />
                <ProductsWrapper />
            </div>

        );
    }
}

export default Products;