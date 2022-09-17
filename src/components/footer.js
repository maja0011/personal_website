import '../css/footer.css';
import { NavLink, Link } from 'react-router-dom';
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {MdEmail} from "react-icons/md";



function Footer () {
return (

   <div className='theFooter'>
    <div className='leftFooter'>
        Copyright © Majaro Tolu {new Date().getFullYear()}
    </div>
    <div className='rightFooter'>
      <a href="https://github.com/maja0011" target="blank"><FaGithub className="mediaItem" size="35" /></a>
      <a href="https://www.linkedin.com/in/adebayo-majaro-02235b202/" target="blank"><FaLinkedin className="mediaItem" size="35" /></a>
      <a href="mailto:tolumaj@gmail.com" target="blank"><MdEmail className="mediaItem"size="35"  /></a>
    </div>
   </div>
);

}
export default Footer;