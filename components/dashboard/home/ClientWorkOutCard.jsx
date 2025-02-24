
import Image from "next/image"
import   { WeeklyPerformanceChart } from "./WeeklyPerformanceChart"

export default function ClientWorkOutCard({
  userName,
  timeAgo,
  status,
  planType,
  weekInfo,
  user_icon,
  assignedWorkouts,
  weekPerformance,
}) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bgSuccess"
      case "Completed":
        return "bgInfo"
      default:
        return "bgWarning"
    }
  }

  return (
    <div className="card border rounded-3 p-4 shadow-sm clientWorkCard">
      <div className="cardHeader d-flex justify-content-between align-items-center mb-3">
        <div className="userInfo d-flex align-items-center gap-2">
          <Image
            src={user_icon}
            alt={userName}
            width={40}
            height={40}
            className="rounded-circle"
          />
          <div>
            <h6 className="mdHeading">{userName}</h6>
            <p className="mainText">{timeAgo}</p>
          </div>
        </div>
        <span className={`badge ${getStatusClass(status)}`}>{status}</span>
      </div>

      <div className="workoutPlan mb-4">
        <p className="textMuted d-block">Workout Plan</p>
        <div className="d-flex justify-content-between">
          <h5 className="mdHeading">{planType}</h5>
          <span className="mdHeading">{weekInfo}</span>
        </div>
      </div>

      <div className="assignedWorkout mb-4">
        <small className="textMuted d-block mb-2">Assigned Workout</small>
        <div className="assignedCards">
          {assignedWorkouts.map((workout, index) => ( 
            <div className={`workoutIcon  position-relative `}>
              <Image
                src={workout.icon || "/placeholder.svg"}
                alt={workout.type}
                width={"70"}
                height={"70"}
                className="rounded-circle assignImage"
              />
              <p className={`mainText  `}>{workout.type}</p>
            </div> 
           
          ))}
        </div>
      </div>

      <div className="weekPerformance">
        <p className="textMuted  mb-2">Week Performance</p>  
        <WeeklyPerformanceChart data={weekPerformance} /> 
     
      </div>
    </div>
  )
}

