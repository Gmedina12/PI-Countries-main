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
        GET_ACTIVITY_BY_NAME,
        GET_ACTIVITIES,
        DELETE_ACTIVITY,
        POST_ACTIVITY,
        FILTER_BY_ACT
        
    } from '../Action/action-types'

    //Consulta de todos los países
    export const getCountries = () =>{
        return async (dispatch) => {
            try{
            const response = await axios.get('http://localhost:3001/countries');
            dispatch({ type: GET_COUNTRIES, payload: response.data });
            } catch (error) {
            console.log(error);
            }
        };
    }
    //Consulta país por ID
    export const getCountriesById = (ID) => {
        return async (dispatch) => {
            try{
                const response = await axios.get(`http://localhost:3001/countries${ID}`)
                dispatch({type: GET_COUNTRY_DETAIL, payload: response.data})
            }
            catch(error){
                console.log(error.message)
            }
        }
    }
    //Consultar países por nombre 
    export const getCountriesByName = (name) => {
        return async (dispatch) => {
            try {
                const res = await axios.get(
                    `http://localhost:3001/countries/name?name=${name}`
                );
                console.log('pasé por el axios de getCountryByName', res.data)
                dispatch({ type: GET_COUNTRIES_NAME, payload: res.data })
                } catch (error) {
                console.log(error);
                }
            
        }
        };
    
    //Ordena países orden alfabético A-Z
    export const ordAlphabeticAsc = () => {
        return{
            type: ORD_ALPHA_ASC
        }
    }
    //Ordena países orden alfabético Z-A
    export const ordAlphabeticDesc = () => {
        return{
            type: ORD_ALPHA_DESC
        }
    }
    //Ordena países por población Menor a mayor
    export const ordPopulationAsc = () =>{
        return{
            type: ORD_POPULATION_ASC
        }
    }
    //Ordena países por población Mayor a menor
    export const ordPopulationDesc = () =>{
        return{
            type: ORD_POPULATION_DESC
        }
    }
    //Ordenar países por continente
    export const orderByContinent = (continents) => {
        return{
            type: ORD_BY_CONTINENT,
            payload: continents,
        }
    }
    //consultar todas las actividades --
    export const getActivities = () =>{
        return async (dispatch) => {
            try{
            const response = await axios.get('http://localhost:3001/activities');
            console.log('pasé por el axios',response.data)
            dispatch({ type: GET_ACTIVITIES, payload: response.data });
            } catch (error) {
            console.log(error);
            }
        };
    }

    //Filtrar por actividad
    export const filterByActivity = (activities) =>{
        return{
            type: FILTER_BY_ACT,
            payload: activities
        }
    }


    //consultar actividad por nombre (Detail)
    export const getActivityByName = async (name) => {
        try {z
            const res = await axios.get(
                `http://localhost:3001/activities?name=${name}`
            );
            dispatch({ type: GET_ACTIVITY_BY_NAME, payload: res.data });
            } catch (error) {
            console.log(error);
            }
    }
    //Eliminar actividad
    export const deleteActivity = (id) => {
        return async (dispatch)=>{
            try{
                await axios.delete(`http://localhost:3001/activities/${id}`)
                dispatch({type: DELETE_ACTIVITY, payload: id})
            }
            catch(error){
                console.log(error.message)
            }
        }
    }
    //Crear actividad
    export const postActivity = (activity) =>{
        console.log('entré a la función',activity)
        return async (dispatch) =>{
            try{
                const newActivity = await axios.post('http://localhost:3001/activities',activity)
                console.log('Pasé por el axios', newActivity.data)
                dispatch({type: POST_ACTIVITY,
                        payload: newActivity.data})
            }
            catch(error){
                console.log(error.message)
            }
        }

    }