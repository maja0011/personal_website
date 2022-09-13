import { Navbar,Container, NavbarBrand, Button} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';


function Header() {
    return(
        <div className='headerContainer'>
        <Navbar >
            
            <NavbarBrand className="navbarBrand" >
                <Link to= {'/'}><Button className="brandButton">MAJARO TOLU</Button></Link>
            </NavbarBrand>
            <div className="headerList">
            
            <NavLink  to="/about" activeClassName="active" >
                <Button className="headerButton">About</Button>{''}
            </NavLink>
           
            
            <NavLink  to="/projects" activeClassName="active" >
            <Button className="headerButton">Projects</Button>{''}
            </NavLink>
            
            
            </div>
           
        </Navbar>
        </div>
    );
}
export default Header;