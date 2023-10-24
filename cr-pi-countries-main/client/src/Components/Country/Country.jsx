import React from "react";
import { Link } from "react-router-dom";
import style from './Country.module.css'

const Country = ({ flags, name, continents, id, Activities }) => {
    return (
        <div className={style.countryContainerHome}>
            <Link to={`/countries/${id}`}>
               <div className={style.countryName}> <h2>{name}</h2></div>
                <img src={flags} alt="Image no available" className={style.countryFlags} width='320px' height='200px'/>
                <div className={style.countryName}> <h2>{continents}</h2></div>
  
                
            </Link>
        </div>

    );
};

export default Country;
