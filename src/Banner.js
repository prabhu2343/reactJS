import React from "react";
import "./style.css";

function Banner(){
    return(
        <>
        <div className="Banner">
        <img src={require('./Assets/banner.png')} alt="banner"/>  
        </div>
        </>
    );
}

export default Banner;