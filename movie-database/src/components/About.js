import  logo  from '../scss/logo.svg';
import '../scss/styles.scss';

const About = () => {

return (

    <div className="about-content">
        <div classname="about-logo">
            <img src={logo} alt="Sunset Logo" />
        </div>

        <div className="about-info">
            <h1>About SunsetFilms</h1>
            <p>At sunset Movies, we aim to give you the best and latest information on the hottest movies in Hollywood. Founded in 2022, we have the most reliable resources on your favourite actors and actresses, producers and directors, and hehind-the-scenes crew.</p>

            <p>Our Sunset Red Carpet Team are on the Floor at many premiers to give us real-time information on what's going on at those popular event!</p>

            <h2>Our Story</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ex minima impedit autem eaque qui magnam earum ab fugit incidunt delectus quibusdam exercitationem a, modi dolorem fuga nemo natus atque.</p>
        </div>
    </div>
)
};

export default About;
