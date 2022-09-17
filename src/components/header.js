import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';


function Header() {
    return(
        <nav className='headerContainer'>
       
            
            <div className="navbarBrand" >
                <Link to= {'/'} className='homeLink'>MAJARO TOLU</Link>
            </div>
            <div className="headerList">
            
            <NavLink  to="/about" className ='componentLink'activeClassName="active" >
                About{''}
            </NavLink>
           
            
            <NavLink  to="/projects"className ='componentLink' activeClassName="active" >
            Projects{''}
            </NavLink>
            
            
            </div>
           
        
        </nav>
    );
}
export default Header;