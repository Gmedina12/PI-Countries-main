import React from "react";
import { Link } from "react-router-dom";

const country = ({ flags, ID, name, continent }) => {
    return(
        <div>
            <div><img src={flags} alt="Image not available" /></div>
            <h3>{ID}</h3>
            <h3>{name}</h3>
            <h3>{continent}</h3>   
        </div>
    )
}

export default country