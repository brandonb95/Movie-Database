import  logo  from '../scss/logo.svg';
import '../scss/styles.scss';

const About = () => {

return (

    <body>
    <div className="about-content">
        <div classname="about-logo">
            <img src={logo} alt="Sunset Logo" />
        </div>

        <div className="about-info">
            <h1>About Us</h1>
            <p>At Sunset Movies, we aim to give you the best and latest information on the hottest movies in Hollywood. Founded in 2022, we have the most reliable resources on your favourite actors and actresses, producers and directors, and hehind-the-scenes crew. Additionally, Sunset Movies is a great source to access/view high resolution movie posters. Our Sunset Red Carpet Team are on the Floor at many premiers to give us real-time information on what's going on at those popular event! </p>

            <h2>Our Story</h2>
            <p>The developers of Sunset Movies are passionate about making your entertainment experience enjoyable. The team consists of three developers who share a passion for film and media. </p>

            <h4>Sunset Movies is here to help you find your new favourite story</h4>
        </div>
    </div>
    </body>
)
};

export default About;
