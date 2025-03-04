import Image from "next/image";
import image_1 from "@/public/assets/days_plan_1.png";
import { ProgressBar } from "react-bootstrap";
import Link from "next/link";

const WorkoutPlan = () => {
  const workoutData = [
    {
      image: "/assets/days_plan_1.png",
      title: "Bench Press",
      sets: "4 set x 12 reps",
      percentage: 60,
    },
    {
      image: "/assets/days_plan_2.png",
      title: "Incline Dumbbell Press",
      sets: "3 set x 12 reps",
      percentage: 45,
    },
    {
      image: "/assets/days_plan_3.png",
      title: "Chest Flys",
      sets: "3 set x 12 reps",
      percentage: 100,
    },
  ];

  const now = 60;

  return (
    <div className="workoutPlanContainer   mt-4">
      <h1 className="mdHeading">Today Plan</h1>
      <div className=" workoutPlanContainerCardContainer">
        {workoutData.map((item, index) => (
          <Link href={`/mobile_pages/client_dashboard/bench_press`}  key={index}>
           <div className="workPlanCard">
            <p className="chestText">Chest</p>
            <Image
              src={item.image}
              width={93}
              height={93}
              alt={item.titles}
              className="workPlanCardImg"
            />
            <div className="workPlanRightContent">
              <h4 className="mdHeading">{item.title}</h4>
              <p className="mainText">{item.sets}</p>
              <ProgressBar
                now={item.percentage}
                label={`${
                  item.percentage === 100 ? "completed" : item.percentage + "%"
                }`}
                className="mt-2"
              />
            </div>
          </div>
          </Link>
         
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
