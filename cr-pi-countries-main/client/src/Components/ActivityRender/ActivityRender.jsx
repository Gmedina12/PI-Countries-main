import Activity from '../Activity/Activity'

const Activities = ({activities, onClose}) => {
   return (
    <div>
      {activities.map((activity) => {
            return(
               <Activity
                  key={activity.ID}
                  id={activity.ID}
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                  onClose={onClose}
               />
            )
         }
         )
      } 
    </div>);
}

export default Activities;