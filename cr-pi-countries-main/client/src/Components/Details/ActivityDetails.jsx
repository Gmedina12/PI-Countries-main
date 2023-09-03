import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
    const [activity, setActivity] = useState({});
    const { ID, name } = useParams()
    useEffect(() => {
        axios(`http://localhost:3001/${ID}`).then(({ data }) => {
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
            {activity?.name ?<h2>{name}</h2>:''}
            {activity?.difficulty ?<h2>{activity.difficulty}</h2>:''}
            {activity?.duration ?<h2>{activity.duration}</h2>:''}
            {activity?.season?<h2>{activity.season}</h2>:''}
            



        </div>
    )
}

export default Detail;