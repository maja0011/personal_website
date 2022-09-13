import '../css/footer.css';
import { Navbar,Container, Button, Row, Col} from 'react-bootstrap/';
import { NavLink, Link } from 'react-router-dom';
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {MdEmail} from "react-icons/md";



function Footer () {
return (

    <Container>
        <div className='theFooter'>
        <Row>
            <Col>
            first
                {/* <div className='footerCopyright'>
                    <p>Down in the footer</p>

                </div> */}
            </Col>

            <Col >
            second
                {/* <div className='footerIcons'>
                    <p>icons</p>
                </div> */}

            </Col>
        </Row>
        </div>
    </Container>

);

}
export default Footer;