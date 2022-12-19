import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <div className='banner-brand'>
                    HAMGO SHOP
                </div>
                <div className='banner-category'>
                    <ol>
                        <li>دیجیتال</li>
                        <li>خوراکی</li>
                        <li>خانگی</li>
                        <li>سفر</li>
                        <li>سرگرمی</li>
                        <li>پوشاک</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Banner;