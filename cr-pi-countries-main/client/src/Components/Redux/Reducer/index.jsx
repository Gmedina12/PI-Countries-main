import {
    GET_COUNTRIES,
    GET_COUNTRY_DETAIL,
    GET_COUNTRIES_NAME,
    ORD_ALPHA_ASC,
    ORD_ALPHA_DESC,
    ORD_POPULATION_ASC,
    ORD_POPULATION_DESC,
    ORD_BY_CONTINENT,
    GET_ACTIVIVITY_BY_NAME,
    DELETE_ACTIVITY,
    POST_ACTIVITY
    
} from '../Action/action-types'

import { ordAlphabetic, ordPopulation} from '../../Order/Orders'

const initialState = {
    countries: [],
    countryDetail: [],
    activities: []
  };

 export const rootReducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_COUNTRIES: {
                return{
                    ...state,
                    countries: action.payload
                }
            }
            case GET_COUNTRY_DETAIL: {
                return{
                    ...state,
                    countryDetail: action.payload
                }
            }
            case GET_COUNTRIES_NAME: {
                return{
                    ...state,
                    countries: action.payload
                }
            }
            case ORD_ALPHA_ASC: {
                return{
                    ...state,
                    countries: state.countries.slice().sort(ordAlphabetic)
                }
            }
            case ORD_ALPHA_DESC:{
                return{
                    ...state,
                    countries: state.countries.slice().sort( (a, b) => ordAlphabetic(a, b, true))
                }
            }
            case ORD_POPULATION_ASC:{
                return{
                    ...state,
                    countries: state.countries.slice().sort(ordPopulation)
                }
            }
            case ORD_POPULATION_DESC:{
                return{
                    ...state,
                    countries: state.countries.slice().sort(ordPopulation).reverse()
                }
            }
            case ORD_BY_CONTINENT:{
                return{
                    ...state,
                    countries: state.countries.filter((c) => c.region === action.payload)
                }
            }
            case GET_ACTIVIVITY_BY_NAME:{
                return{
                    ...state,
                    countries: state.countries.filter((country)=>{ 
                        return country.activities.some((activity)=> activity.name === action.payload)
                    })
                }
            }
            case DELETE_ACTIVITY:{
                return{
                    ...state,
                    activities: state.activities.filter((activity)=> activity.id !== activityToDelete)
                }
            }
            case POST_ACTIVITY:{
                return{
                    ...state,
                    activities: state.activities.push(newActivity)
                }
            }
                     

            default:
                return state;
        }
  }
  

  