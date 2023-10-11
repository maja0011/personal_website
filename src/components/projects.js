import '../css/projects.css'
import OldWeb from '../images/home.jpg';
import imdb_img from '../images/IMDB.jpg';
import weather_img from '../images/weather.jpg';


function Projects () {
    return (
            <section id= 'projects'>
                <h5>My Recent Work</h5>
                <h2>Projects</h2>

                <div className='container projects__container'>

                    <article className='projects__item'>
                        <div className='projects__item-image'>
                            <img src={imdb_img} alt="imdb clone project"/>
                        </div>
                        <h3>IMDB clone project</h3>
                        <div className='projects__item-cta'>
                        <a href='https://github.com/maja0011/imdb_clone' className='btn' target='_blank'>Github</a>
                        <a href='https://maja0011.github.io/imdb_clone/' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>

                    <article className='projects__item'>
                        <div className='projects__item-image'>
                            <img src={weather_img} alt="weather app project"/>
                        </div>
                        <h3>Weather App Project</h3>
                        <div className='projects__item-cta'>
                        <a href='https://github.com/maja0011/weather_app' className='btn' target='_blank'>Github</a>
                        <a href='https://maja0011.github.io/weather_app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>

                    <article className='projects__item'>
                        <div className='projects__item-image'>
                            <img src={OldWeb} alt="old webpage"/>
                        </div>
                        <h3>Old web page</h3>
                        <div className='projects__item-cta'>
                        <a href='https://github.com/maja0011/maja0011.github.io' className='btn' target='_blank'>Github</a>
                        <a href='https://maja0011.github.io' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                </div>
            </section>

    );
}

export default Projects;