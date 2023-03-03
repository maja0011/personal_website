import '../css/homepage.css';
import personal from '../images/personal.png';

function Homepage () {
    return (
       <div className="homepageBody">
        <img src ={personal} className='headshotImage' alt='Headshot'/>
       </div>

    );

}

export default Homepage;