import { Navbar,Container, NavbarBrand, Button} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';


function Header() {
    return(
        <Navbar >
            <Container>
            <NavbarBrand className="navbarBrand" >
                <Link to= {'/'}><Button className="brandButton">MAJARO TOLU</Button></Link>
            </NavbarBrand>
            <div className="headerList">
            
            <NavLink  to="/about" >
                <Button className="headerButton">About</Button>{''}
            </NavLink>
           
            
            <NavLink  to="/projects" >
            <Button className="headerButton">Projects</Button>{''}
            </NavLink>
            
            
            </div>
            </Container>
        </Navbar>
    );
}
export default Header;