import React, { Component } from 'react';




class HamburgerMenu extends Component {
    render() {
        return (
            <nav>
                <input type='checkbox' id='check' className='checkbox' hidden/>
                <div className='hamburger-menu'>
                    <label for="check" className='menu'>
                        <div className='menu-line menu-line1'></div>
                        <div className='menu-line menu-line2'></div>
                        <div className='menu-line menu-line3'></div>
                    </label>
                </div>

                <div className='hamburger-navbar'>
                    <div className='hamburger-navbar-right'>
                        <div className='hamburger-navbar-right-logo'>
                            HAMGO SHOP
                        </div>

                        <div className='hamburger-navbar-right-menu'> 
                            <ol>
                                <li>خانه</li>
                                <li>مشاهده محصولات</li>
                                <li>دستبندی محصولات</li>
                                <li>تماس با ما</li>
                                <li>درباره ما</li>
                            </ol>
                        </div>
                    </div>

                    
                </div>
            </nav>
        );
    }
}

export default HamburgerMenu;