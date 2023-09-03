import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
    const [country, setCountry] = useState({});
    const { ID, name } = useParams()
    useEffect(() => {
        axios(`http://localhost:3001/${ID}`).then(({ data }) => {
            if (data.name) {
                setCountry(data);
            } else {
                window.alert('Country not found');
            }
        });
        return setCountry({});
    }, [ID]);

    return (
        <div>
            {country?.flags?.png?<img src ={country.flags.png} alt='country'/>:''}
            {country?.ID ?<h2>{country.ID}</h2>:''}
            {country?.name?.common?<h2>{name.common}</h2>:''}
            {country?.continents?<h2>{country.continents}</h2>:''}
            {country?.capital?<h2>{country.capital}</h2>:''}
            {country?.subregion?<h2>{country.subregion}</h2>:''}
            {country?.area?<h2>{country.area}</h2>:''}
            {country?.population?<h2>{country.population}</h2>:''}

        </div>
    )
}

export default Detail;