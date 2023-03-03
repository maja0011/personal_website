import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';
import CTA from './CTA'


function Header() {
    return(
        <header>
            <div className="container header__container">

                <h5>Hello I'm</h5>
                <h1>Majaro Adebayo</h1>
                <h5 className='text-light'>Junior Developer</h5>
                <CTA/>
            </div>
        </header>
    );
}
export default Header;