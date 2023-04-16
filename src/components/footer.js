import '../css/footer.css';
import {FaGithub, FaLinkedin} from "react-icons/fa"




function Footer () {
return (
<footer>
    <a href="#" className='footer__logo'>Home</a>

    <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>

    </ul>

    <div className='footer__socials'>
    <a href="https://www.linkedin.com/in/majaro-adebayo/" target="_blank"><FaLinkedin/></a>
    <a href="https://github.com/maja0011" target="_blank"><FaGithub/></a>
    </div>

    <div className='footer__copyright'>
        <small>&copy; Adebayo Majaro {new Date().getFullYear()}</small>
    </div>
</footer>

);

}
export default Footer;