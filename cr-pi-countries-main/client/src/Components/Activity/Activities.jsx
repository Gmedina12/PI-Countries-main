import React from "react";

import ActivityRender from '../ActivityRender/ActivityRender'
import { useDispatch, useSelector } from "react-redux";
import {getActivities} from '../Redux/Action/index'
import { useEffect } from "react";
import style from './Activities.module.css'


const Activities = () => {
    const dispatch = useDispatch()
    const allActivities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    }, [])
    return (
        <div className={style.activitiesContainer}>
            <ActivityRender activities={allActivities} />
        </div>
    )
}

export default Activities