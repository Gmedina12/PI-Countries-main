import React from "react";
import { Link } from "react-router-dom";

const country = ({ name, difficulty, duration, season }) => {
    return(
        <div>
            {/* <div><img src={flags} alt="Image not available" /></div> */}
            <h3>{name}</h3>
            <h3>{difficulty}</h3>
            <h3>{duration}</h3>
            <h3>{season}</h3>      
        </div>
    )
}

export default country