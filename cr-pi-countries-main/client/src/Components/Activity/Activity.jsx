import React from "react";
import { Link } from "react-router-dom";

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
// const Activity = ({ countries }) => {
//   return (
//     <div>
//       <h1>Discover every country in the world</h1>
//       {countries.map((country) => (
//         <Country
//           key={country.ID} 
//           flags={country.flags.png}
//           name={country.name.common}
//           capital={country.capital}
//           population={country.population}
//         />
//       ))}
//     </div>
//   );
// }

export default Activity