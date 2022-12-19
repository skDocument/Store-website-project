import React, { Component } from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBlog, faPieChart } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "../Components/HamburgerMenu";



class Header extends Component {

    render(){
        

        return(

            <header>
                <HamburgerMenu />
                <div className="header" style={ {backgroundColor :this.props.bg , position : this.props.pos}}>
                    <div className="header-menu">
                        <ul className="header-menu-ul">
                            <li className="home-link"><FontAwesomeIcon icon={faBlog}/></li>
                            <li><Link to="/">خانه</Link></li>
                            <li><a href="#">مشاهده ی همه محصولات</a></li>
                            <li><a href="#">دسته بندی محصولات</a></li>
                            <li><a href="#">تماس با ما</a></li>
                            <li><a href="#">درباره ما</a></li>

                        </ul>
                    </div>

                    <div className="header-login">
                        <Link to='/' className="header-login-button">
                            ورود کاربران
                        </Link>
                    </div>



                </div>


            </header>
        )
    }
}




export default Header;