import Image from "next/image";
import ImageStack from "./ImageStack";

function WorkOutPageCard({
    workoutPlan,
    weeks,
    assignedTo,
    workoutList


}) {
  const assignedWorkouts = [
     
  ];
  const imageSources = [
    "/assets/client_user_1.png", 
    "/assets/client_user_2.png", 
    "/assets/client_user_3.png", 
    "/assets/client_user_4.png", 
  ];
  return (
    <div className="WorkOutPageCard">
      <div className="cardHeader">
        <h5 className="mainText">Workout Plans</h5>
        <div className="d-flex align-items-center justify-content-between cardHeaderHeading">
          <h3 className="mdHeading">{workoutPlan}</h3>
          <h3 className="mdHeading">{weeks}</h3>
        </div>
      </div>

      <div className="workOutPageCardBody">
        <div className="assignedWorkout mb-4">
          <small className="textMuted d-block mb-2">Assigned Workout</small>
          <div className="assignedCards">
            {workoutList.images.map((workout, index) => (
              <div key={index} className={`workoutIcon  position-relative `}>
                <Image
                  src={workout.url || "/placeholder.svg"}
                  alt={workout.category}
                  width={"70"}
                  height={"70"}
                  className="rounded-circle assignImage"
                />
                <p className={`mainText  `}>{workout.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="assignedWorkout  mb-4">
          <p className="textMuted d-block mb-2">Assigned To</p>
            
          <div className="d-flex align-items-center justify-content-between  assignedClientRow ">
            <h5 className="mdHeading">{assignedTo.clients} Clients</h5>

            <div className="assignedClientImages">
              <ImageStack images={imageSources} moreCount={assignedTo.more} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkOutPageCard;
