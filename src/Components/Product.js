import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Product extends Component {
    render() {
        return (
            <div className='product'>
                <div className='product-photo'>
                    <img src={this.props.data.image} />
                </div>

                <div className='product-info'>
                    <div className='product-info-brand'><p>{this.props.data.title}</p></div>
                    <div className='product-info-price'> 
                        <span>{this.props.data.category}</span>
                        <p> 
                            $<span style={{marginLeft : '3px'}}>{this.props.data.price}</span>
                        </p>
                    </div>
                </div>  

                <div className='product-buttons'>
                    <div className='productBtn'>نشان کردن</div>
                    <Link to={`/productDetail/?pCode=${this.props.data.id}&name=${this.props.data.title}`} className='productBtn'>جزییات بیشتر</Link>
                </div>
                <span className='product-progress'></span>
            </div>
        );
    }
}

export default Product;