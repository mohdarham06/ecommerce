import React from 'react'

// icons
import { BiUser } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";


const Header = () => {


    return (
        <header>
            <div className='header-wrap'>

                <div className='brand'>Nexo</div>
                {/* <div className='brand'>NEXO</div> */}

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>


                <ul className='right-ul'>
                    <li> <BiUser /> </li>
                    <li> <BiShoppingBag /> </li>
                </ul>

            </div>
        </header>
    )
}

export default Header