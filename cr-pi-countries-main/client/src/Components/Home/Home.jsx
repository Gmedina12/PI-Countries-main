import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import {
  getCountries,
  orderByContinent,
  ordPopulationDesc,
  ordPopulationAsc,
  ordAlphabeticDesc,
  ordAlphabeticAsc,
  getActivities,
  filterByActivity
} from '../Redux/Action/index'
import Countries from '../CountryRender/CountryRender'

const Home = () => {


  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);


  const handlerChange = (event) => {
    console.log('Antes de entrar al switch', event.target.name)
    switch (event.target.name) {
      case 'continents':
        dispatch(orderByContinent(event.target.value))
        break;
      case 'activities':
        dispatch(filterByActivity(event.target.value))
      default:
        console.log('No pasó nada y vine por defecto :)')
        break;
    }
  }

  const handlerOrder = (event) => {
    console.log('Entró el evento - Te amo habibi <3', event.target.name)
    switch (event.target.value) {
      case 'na':
        dispatch(ordAlphabeticAsc())
        break;
      case 'nd':
        dispatch(ordAlphabeticDesc())
        break;
      case 'pa':
        dispatch(ordPopulationAsc())
        break;
      case 'pd':
        dispatch(ordPopulationDesc())
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [])

  return (
    <div>
      <div>
        <select name='continents' onChange={handlerChange}>
          <option value="All Continents"> All Continents </option>
          <option value="Africa"> Africa </option>
          <option value="Antarctica"> Antarctica </option>
          <option value="Asia"> Asia </option>
          <option value="Europe"> Europe </option>
          <option value="North America"> North America </option>
          <option value="Oceania"> Oceania </option>
          <option value="South America"> South America </option>
        </select>

        <select name='Order' onChange={handlerOrder}>
          <optgroup label='Alphabetic'>
            <option value='na'>Ascendent A-Z</option>
            <option value='nd'>Descendent Z-A </option>
          </optgroup>
          <optgroup label='Population'>
            <option value='pd'>Largest - smallest</option>
            <option value='pa'>Smallest - largest</option>
          </optgroup>
        </select>

        <select onChange={handlerChange} name='activities'>
          <option>Select activity</option>
          {allActivities?.map((act) => <option value={act.ID} key={act.ID}>{act.name}</option>)}
        </select>
        
      </div>
      <div>
        <Countries />
      </div>
    </div>
  );
}

export default Home;

