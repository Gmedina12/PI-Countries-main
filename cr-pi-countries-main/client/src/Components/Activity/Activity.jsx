import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteActivity } from "../Redux/Action";
// import style from './Activity.module.css'
import style from './Activities.module.css'

const Activity = ({ id, name, picture, difficulty, duration, season }) => {
    const location = useLocation().pathname
    const dispatch = useDispatch()


const handlerDelete =()=>{
    console.log('muestra el ID', id)
    dispatch(deleteActivity(id))
    window.location.reload(false)
}


    return(
        <div className={style.activityContainer}>
            <div className={style.contenedor}><img src={picture} alt="Image not available" className={style.medium}/></div>
            <h3>Activity: {name}</h3>
            <h3>Difficulty: {difficulty}</h3>
            <h3>Duration in hours {`(avg.)`}: {duration}</h3>
            <h3>Best Season: {season}</h3> 
            {(location === '/activities')? <button onClick={handlerDelete}>Delete</button>:''}     
        </div>
    )
} 
export default Activity