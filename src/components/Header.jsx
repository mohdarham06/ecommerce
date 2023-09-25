import React from 'react'

// icons
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {


    return (
        <header>
            <div className='header-wrap'>

                <div className='brand'>Brand</div>
                
                <nav>
                    <ul>
                        <li> <BiUser/> </li>
                        <li> <AiOutlineShoppingCart/> </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header