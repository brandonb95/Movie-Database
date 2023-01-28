import { useState } from "react";

const BtnSlider = ({direction, moveSlide}) => {

    return(
     <button onClick={moveSlide}
     className={direction === "next" ? "btn-slide-next" : "btn-slide prev"}>

     </button>

    )
}

export default BtnSlider;