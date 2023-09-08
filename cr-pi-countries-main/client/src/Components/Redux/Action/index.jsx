    import axios from "axios";
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

    export const getCountries = () =>{
        return async (dispatch) => {
            try{
            const response = await axios.get('/countries');
            dispatch({ type: GET_COUNTRIES, payload: response.data });
            } catch (error) {
            console.log(error);
            }
        };
    }
    export const getCountriesById = (id) => {
        return async (dispatch) => {
            try{
                const response = await axios.get(`/countries${id}`)
                dispatch({type: GET_COUNTRY_DETAIL, payload: response.data})
            }
            catch(error){
                console.log(error.message)
            }
        }
    }

    export const getCountriesByName = async (name) => {
        try {
            const res = await axios.get(
                `/countries?name=${name}`
            );
            dispatch({ type: GET_COUNTRIES_NAME, payload: res.data });
            } catch (error) {
            console.log(error);
            }
        };
    

    export const ordAlphabeticAsc = () => {
        return{
            type: ORD_ALPHA_ASC
        }
    }
    export const ordAlphabeticDesc = () => {
        return{
            type: ORD_ALPHA_DESC
        }
    }
    export const ordPopulationAsc = () =>{
        return{
            type: ORD_POPULATION_ASC
        }
    }
    export const ordPopulationDesc = () =>{
        return{
            type: ORD_POPULATION_DESC
        }
    }
    export const orderByContinent = () => {
        return{
            type: ORD_BY_CONTINENT
        }
    }
    export const getActivityByName = async (name) => {
        try {
            const res = await axios.get(
                `/activities?name=${name}`
            );
            dispatch({ type: GET_ACTIVIVITY_BY_NAME, payload: res.data });
            } catch (error) {
            console.log(error);
            }
    }
    export const deleteActivity = (id) => {
        return async (dispatch)=>{
            try{
                await axios.delete(`/activities/${id}`)
                dispatch({type: DELETE_ACTIVITY, payload: id})
            }
            catch(error){
                console.log(error.message)
            }
        }
    }
    export const postActivity = (activity) =>{
        return async (dispatch) =>{
            try{
                const newActivity = await axios.post('/form',activity)
                dispatch({type: POST_ACTIVITY,
                        payload: newActivity.data})
            }
            catch(error){
                console.log(error.message)
            }
        }

    }//tengo mis dudas con este