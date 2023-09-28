import React from 'react'


import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
    return (
        <footer>

            <div className="footer-grid">

                <div className='grid-container'>
                    <div className='footer-brand'>brand</div>
                    Dark design with light colors
                </div>

                <div className='grid-container'>
                    <h4 className='footer-heading'>Menu</h4>
                    <ul className='footer-ul'>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='grid-container'>
                    <h4 className='footer-heading'>Products</h4>
                    <ul className='footer-ul'>
                        <li>Watches</li>
                        <li>Buds</li>
                        <li>Headphones</li>
                        <li>Hihi</li>
                    </ul>
                </div>

                <div className='grid-container'>
                    <h4 className='footer-heading'>Contact</h4>
                    <ul className='footer-ul'>
                        <li>dummy@brand.com</li>
                        <li>011-0088-4444</li>
                    </ul>

                    <h4 className='footer-heading'>Follow Us</h4>
                    <div className='social-icons'>
                        <a href='https://www.example.com' className='icon-box' target='_blank' rel='noopener noreferrer'>
                            <BiLogoFacebook className="icon" />
                        </a>
                        <a href='https://www.example.com' className='icon-box' target='_blank' rel='noopener noreferrer'>
                            <BiLogoInstagram className="icon" />
                        </a>
                        <a href='https://www.example.com' className='icon-box' target='_blank' rel='noopener noreferrer'>
                            <BiLogoTwitter className="icon" />
                        </a>
                    </div>

                </div>

            </div>



            <div className='credits-container'>
                <a className="credit" href="https://mohdarham.netlify.app/" target="_blank" rel='noopener noreferrer'> &copy; Mohd Arham 2023. &lt;/&gt; All Rights Reserved. </a>
            </div>



        </footer>
    )
}

export default Footer