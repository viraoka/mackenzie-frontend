import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <div className='container prefooter'>
            <p className="pref">Mackenzie Interiors  |  Designing Interiors Coast to Coast  |  734 W. Polk St. Phoenix, AZ 85007  | 602-529-2191  |  mackenzieinteriors@gmail.com</p>
            </div>
            <div className='footer'>
            <div className='icons'>
                <NavLink className="inst" to="https://www.instagram.com/interiordesignmag/" target="_blank">
                <FaSquareInstagram /></NavLink>
                <NavLink className="inst" to="https://twitter.com/InteriorDesign" target='_blank'>
                <SlSocialTwitter />    
                </NavLink>
                <NavLink className="inst" to="https://www.pinterest.com/pin/55169164178682688/" target='_blank'>
                <FaPinterest />                    
                </NavLink>
                <NavLink className="inst" to="https://www.facebook.com/yuandesignpj" target='_blank'>
                <FaFacebook />                    
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer;