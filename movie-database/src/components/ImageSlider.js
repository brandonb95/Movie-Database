import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderParentStyles={
        height: '100%',
        position: 'relative',
        top: '-12%',
    };
    
    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const firstDot = {
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-150%, 0)',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };

    const secondDot = {
        position: 'absolute',
        top: '65%',
        left: '50%',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };

    const thirdDot = {
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(150%, 0)',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };
    
    //Jump Backwards
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    //Jump Forwards
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.legth - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return(
        <div style={sliderParentStyles}>
            <div style={firstDot} onClick={goToPrevious}>•</div>
            <div style={secondDot} onClick={goToNext}>•</div>
            <div style={thirdDot}>•</div>
            <div style={slideStyles}></div>
        </div>
    )
};

export default ImageSlider;