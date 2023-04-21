
import ME from '../images/me.JPG'; 
import { FaAward } from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import '../css/about.css';


function About () {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Image' />

                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>2+ completed</small>
                        </article>
                    </div>
                    <p>
                    I'm Adebayo, a recent Computer Engineering graduate from Algonquin College with over 2 years work experience in the IT industry - web developer, software developer, IT technician.<br /> <br />
                    I have a passion for web development and I enjoy working with different technologies stacks . <br /> I am a board game/ video game enthusiast and I like to keep up with news on new industry technologies.
                    </p> 

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>

    );
}

export default About;