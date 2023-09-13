   import React from "react";
   import { useState } from "react";
   import { useDispatch } from "react-redux";
   import style from './SearchBar.module.css'
   import lupa from '../../assets/icon-lupa.png'

   import { getCountriesByName } from "../Redux/Action";

   const SearchBar = () => {
     const [input, setInput] = useState('')

     const dispatch = useDispatch()
     
     const handleChange = (event) =>{
         setInput (event.target.value) 
     }

     const handlerClick = () => {
      dispatch(getCountriesByName(input))
      }


     return (
        <div className={style.searchBar}>
           <input onChange = {handleChange}  type='search' placeholder="Search a Country"/>
           <button onClick={handlerClick} className={style.buttonNav}>
            <img src={lupa} width='20px'/>
           </button>
        </div>
     );
  }

  export default SearchBar
  //mirar cómo buscar también por nombre