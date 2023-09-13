import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ActivityRender from "../ActivityRender/ActivityRender";
import style from './CountryDetail.module.css'

const CountryDetails = () => {
    const [country, setCountry] = useState({});
    const { ID } = useParams()

    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${ID}`)
            console.log(data)
            if (data.name) {
                setCountry(data)
            }
            else {
                window.alert('Country not found')
            }

        }
        catch (error) {
            console.log('Something unexpected was ocurred', error)
            window.alert('Something unexpected was ocurred')
        }

    }

    useEffect(() => {
        getData();
        return () => {
            setCountry({});
        };
    }, [ID]);

    return (
        <div className={style.countryDetails}>
            <div className={style.countryInfo}>
                {country?.flags ? <img src={country.flags} alt='country' className={style.flags} /> : ''}
                <div className={style.countryData}>
                    {country?.ID ? <h2>ID: {country.ID}</h2> : ''}
                    {country?.name?.common ? <h2>Country: {country.name.common}</h2> : ''}
                    {country?.continents ? <h2>Continent: {country.continents}</h2> : ''}
                    {country?.capital ? <h2>Capital: {country.capital}</h2> : ''}
                    {country?.subregion ? <h2>Subregion: {country.subregion}</h2> : ''}
                    {country?.area?<h2>Area: {country.area} Km<sup>2</sup></h2> : ''}
                    {country?.population ? <h2>Population: {country.population}</h2> : ''}
                </div>
            </div>

            {country?.Activities ? <ActivityRender activities={country.Activities} /> : ''}
            {/* <ActivityRender activities = {country.Activities} /> */}



        </div>
    )
}

export default CountryDetails;