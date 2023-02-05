import { useState } from "react";
import BtnSlider from './BtnSlider';
import dataSlider from "./dataSlider";

const ImageSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return(
       <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return(
                    <div 
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL + `/carousel-image-${index +1}.jpg`} alt=""/>
                        <div className='bringToFront'>
                        <h1>{obj.title}</h1>
                        <h2>{obj.subTitle}</h2>
                        </div>
                    </div>
                )
            })}


            <div className="container-dots">
            {Array.from({length: 3}).map((item, index) => (
                 <div onClick={() => moveDot(index + 1)} 
                 className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
             ))}
            </div>
       </div>
    )
}

export default ImageSlider;