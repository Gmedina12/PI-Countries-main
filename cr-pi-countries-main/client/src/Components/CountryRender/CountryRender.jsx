import React, { useEffect, useState } from "react";
import Country from '../Country/Country'
import { useSelector } from "react-redux";



const Countries = () => {
   const countries = useSelector((state) => state.countries);
   const [currentPage, setCurrentPage] = useState(0);

   let nextPage = () => {
      if (countries.length <= currentPage + 10) {
         setCurrentPage(currentPage);
      } else setCurrentPage(currentPage + 10);
   };
   let prevPage = () => {
      if (currentPage < 10) {
         setCurrentPage(0);
      } else {
         setCurrentPage(currentPage - 10);
      }
   };

   const firstPage = () => {
      setCurrentPage(0);
   };

   const lastPage = () => {
      setCurrentPage(countries.length - 10);
   };

   useEffect(() => {
      firstPage()
   }, [countries]);


   const filteredCountries = countries.slice(currentPage, currentPage + 10);
   console.log(filteredCountries)
   return (
      <div>
         <button onClick={firstPage}> {'<<'} </button>
         <button onClick={prevPage}>  {'<'}  </button>
         <button onClick={nextPage}>  {'>'}  </button>
         <button onClick={lastPage}>  {'>>'} </button>
         <div>
            {
               filteredCountries.map((countryElement) => (
                  <Country
                     key={countryElement.ID}
                     id={countryElement.ID}
                     flags={countryElement.flags}
                     name={countryElement.name}
                     continents={countryElement.continents}
                  />))}
         </div>
      </div>
   );
}


export default Countries;