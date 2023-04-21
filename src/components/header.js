import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';
import CTA from './CTA';
import IMG from '../images/header.jpg';
import {FaGithub, FaLinkedin} from "react-icons/fa";


function Header() {
    return(
        <header>
            <div className="container header__container">

                <h5>Hello I'm</h5>
                <h1>Majaro Adebayo</h1>
                <h5 className='text-light'>Junior Developer</h5>
                <CTA/>

                <div className="image">
                    <img src={IMG} alt="myImage" />
                </div>
                <div className= 'header__socials'>
                    <a href="https://www.linkedin.com/in/majaro-adebayo/" target="_blank"><FaLinkedin/></a>
                    <a href="https://github.com/maja0011" target="_blank"><FaGithub/></a>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}
export default Header;