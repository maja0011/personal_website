import '../css/projects.css'
import OldWeb from '../images/home.jpg';
import HairWeb from '../images/avatar1.jpg'


function Projects () {
    return (
            <section id= 'projects'>
                <h5>My Recent Work</h5>
                <h2>Projects</h2>

                <div className='container projects__container'>
                    <article className='projects__item'>
                        <div className='projects__item-image'>
                            <img src={OldWeb} alt="old webpage"/>
                        </div>
                        <h3>This is a project item title</h3>
                        <div className='projects__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://github.com/maja0011' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>

                    <article className='projects__item'>
                        <div className='projects__item-image'>
                            <img src={HairWeb} alt="old webpage"/>
                        </div>
                        <h3>This is a project item title</h3>
                        <div className='projects__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://github.com/maja0011' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                </div>
            </section>

    );
}

export default Projects;