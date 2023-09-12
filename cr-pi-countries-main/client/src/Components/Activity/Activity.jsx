import React from "react";

const Activity = ({ name, picture, difficulty, duration, season }) => {
    return(
        <div>
            <div><img src={picture} alt="Image not available" /></div>
            <h3>{name}</h3>
            <h3>{difficulty}</h3>
            <h3>{duration}</h3>
            <h3>{season}</h3>      
        </div>
    )
}

export default Activity