import React, { useEffect, useState } from "react";
import Country from '../Country/Country'
import { useSelector } from "react-redux";
import style from './CountryRender.module.css'


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
   return (
      <div className={style.renderContainer}>
         <div className={style.filterButtons}>
            <button onClick={firstPage}> ⏮️ </button>
            <button onClick={prevPage}>  ◀️  </button>
            <button onClick={currentPage}>{Math.ceil(currentPage/10+1)}</button>
            <button onClick={nextPage}>  ▶️  </button>
            <button onClick={lastPage}>  ⏭️ </button>
         </div>
         <div className={style.countryRenderAll}>
            {
               filteredCountries.map((countryElement) => (
                  <Country
                     key={countryElement.ID}
                     id={countryElement.ID}
                     flags={countryElement.flags}
                     name={countryElement.name}
                     continents={countryElement.continents}
                     population={countryElement.population}
                  />))}
         </div>
         <div className={style.filterButtons}>
            <button onClick={firstPage}> ⏮️ </button>
            <button onClick={prevPage}>  ◀️  </button>
            <button onClick={currentPage}>{Math.ceil(currentPage/10+1)}</button>
            <button onClick={nextPage}>  ▶️  </button>
            <button onClick={lastPage}>  ⏭️ </button>
         </div>
      </div>
   );
}


export default Countries;