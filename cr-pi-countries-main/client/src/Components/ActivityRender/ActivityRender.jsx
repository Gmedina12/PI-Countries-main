import Activity from '../Activity/Activity'
import style from './ActivityRender.module.css'

const ActivityRender = ({activities}) => {
   return (
    <div className={style.activityRenderContainer}>
      {activities.map((activity) => {
            return(
               <Activity
                  key={activity.ID}
                  id={activity.ID}
                  picture={activity.picture}
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
               />
            )
         }
         )
      } 
    </div>);
}

export default ActivityRender;