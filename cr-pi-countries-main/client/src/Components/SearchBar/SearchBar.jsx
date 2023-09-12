   import React from "react";
   import { useState } from "react";
   import { useDispatch } from "react-redux";

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
        <div>
           <input onChange = {handleChange}  type='search' />
           <button onClick={() => handlerClick()}>Search</button>
        </div>
     );
  }

  export default SearchBar
  //mirar cómo buscar también por nombre