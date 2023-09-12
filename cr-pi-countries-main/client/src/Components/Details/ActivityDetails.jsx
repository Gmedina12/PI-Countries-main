import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const activityDetail = () => {
    const [activity, setActivity] = useState({});
    const { name } = useParams() //no estoy segura de usar useParams
    
    useEffect(() => {
        axios(`http://localhost:3001/${name}`).then(({ data }) => { //correrig ruta no estoy segura

            if (data.name) {
                setActivity(data);
            } else {
                window.alert('Error 404 : Activity not found');
            }
        });
        return setActivity({});
    }, [ID]);

    return (
        <div>
            {activity?.ID ?<h2>{activity.ID}</h2>:''}
            {activity?.picture?<img src ={activity.image} alt=""/>:''}
            {activity?.name ?<h2>{name}</h2>:''}
            {activity?.difficulty ?<h2>{activity.difficulty}</h2>:''}
            {activity?.duration ?<h2>{activity.duration}</h2>:''}
            {activity?.season?<h2>{activity.season}</h2>:''}
            
        </div>
    )
        
    
}

export default activityDetail;


