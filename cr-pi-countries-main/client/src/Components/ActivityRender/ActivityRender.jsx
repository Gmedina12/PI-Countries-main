import Activity from '../Activity/Activity'

const ActivityRender = ({activities}) => {
   return (
    <div>
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