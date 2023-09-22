import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteActivity, getActivities } from "../Redux/Action";
import style from './Activity.module.css'

const Activity = ({ id, name, picture, difficulty, duration, season }) => {
    const location = useLocation().pathname
    const dispatch = useDispatch()
    const navigate = useNavigate()

const handlerDelete =()=>{
    console.log('muestra el ID', id)
    dispatch(deleteActivity(id))
    navigate('/home')
    
}

    return(
        <div className={style.activityContainer}>
            <div><img src={picture} alt="Image not available" /></div>
            <h3>Activity: {name}</h3>
            <h3>Difficulty: {difficulty}</h3>
            <h3>Duration in hours {`(avg.)`}: {duration}</h3>
            <h3>Best Season: {season}</h3> 
            {(location === '/activities')? <button onClick={handlerDelete}>Delete</button>:''}     
        </div>
    )
} 
export default Activity