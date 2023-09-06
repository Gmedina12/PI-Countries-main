import axios from 'axios';
import Country from '../Country/Country'
import { useEffect } from 'react';

// useEffect(()=>{
//    axios('http://localhost:3001/countries')
//    .then(({data})=>{
//       setCountries(data)
//    })
// }, [])

const Countries = ({countries}) => {
   const allCountries = countries.slice(selector * 10 - 10, selector * 10)
   return (
    <div>
         {countries.map((country) => {
            return(
               <Country
                  key={country.id}
                  id = {country.ID}
                  name={country.name.common}
                  flags={country.flags.png}
                  continents={country.continents}
                  capital={country.capital}
                  subregion={country.subregion}
                  area={country.area}
                  population={country.population}
               />
            )
         }
         )
      } 
    </div>);
}

export default Countries;