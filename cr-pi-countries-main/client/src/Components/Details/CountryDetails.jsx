import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ActivityRender from "../ActivityRender/ActivityRender";

const CountryDetails = () => {
    const [country, setCountry] = useState({});
    const { ID } = useParams()

    const getData = async () =>{
        try{
            const { data } = await axios.get(`http://localhost:3001/countries/${ID}`)
            console.log(data)
            if(data.name){
                setCountry(data)
            }
            else{
                window.alert('Country not found')
            }

        }
        catch(error){
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
        <div>
            {country?.flags?<img src ={country.flags} alt='country'/>:''}
            {country?.ID ?<h2>{country.ID}</h2>:''}
            {country?.name?.common?<h2>{country.name.common}</h2>:''}
            {country?.continents?<h2>{country.continents}</h2>:''}
            {country?.capital?<h2>{country.capital}</h2>:''}
            {country?.subregion?<h2>{country.subregion}</h2>:''}
            {country?.area?<h2>{country.area}</h2>:''}
            {country?.population?<h2>{country.population}</h2>:''}
            {country?.Activities?<ActivityRender activities = {country.Activities}/>:''}
            {/* <ActivityRender activities = {country.Activities} /> */}



        </div>
    )
}

export default CountryDetails;