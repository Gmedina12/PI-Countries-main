import React from "react";

 const Country = ({ flags, ID, name, continent }) => {
   return(
       <div>
             <div><img src={flags} alt="Image not available" /></div>
            <h3>{ID}</h3>
            <h3>{name}</h3>
           <h3>{continent}</h3>   
        </div>
   )
}
// const Country = ({ countries }) => {
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


export default Country 
