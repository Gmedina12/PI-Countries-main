import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flags, name, continents, id, Activities }) => {
    return (
        <div>
        <Link to={`/countries/${id}`}>
        <h2>{name}</h2>
        <div>
            <img src={flags} alt="Image no available"/>
        </div>
        <h2>{continents}</h2>
        <h2>{Activities}</h2>
        </Link>
        </div> 
    );
};

export default Country;
