import { useState } from "react";
import Image from "next/image";
import edit_icon from "@/public/assets/edit_icon.png";
import full_body from "@/public/assets/full_body.png";
import Core from "@/public/assets/Core.png";
import chest from "@/public/assets/chest.png";
import workoutdata from "@/data/workoutdays.json";
import ClientDetailHeader from "./ClientDetailHeader";

function WorkoutSection() {
  const [tabShow, setTabShow] = useState(1);

  const handleTabChange = (tabId) => {
    setTabShow(tabId);
  };

  const tabBtnData = [
    {
      id: 1,
      text: "Full body",
      image: full_body,
    },
    {
      id: 2,
      text: "Core",
      image: Core,
    },
    {
      id: 3,
      text: "Chest",
      image: chest,
    },
  ];

  return (
    <section className="WorkoutSection CreateWorkOutPlan py-3">
      <ClientDetailHeader
        title="Current Workout Plan"
        text="Lorem ipsum dolor sit amet consectetur adipiscing"
        buttonText="Edit Plan"
        buttonImage={edit_icon}
      />

      <div className="clientInfoCard  card border rounded-3 p-3  ">
        <div className="cardHeader d-flex justify-content-between align-items-center mb-3">
          <div className="userInfo  ">
            <p className="mainText">Workout Plan</p>
            <h6 className="mdHeading">Strength Training</h6>
          </div>
          <div className="userInfo">
            <p className="mainText text-sm-end">Plan Duration</p>
            <h6 className="mdHeading">6 Weeks (Started: 1 Jan 2024)</h6>
          </div>
        </div>
        <div className="AssignedWorkoutContainer">
          <p className="textMuted">Assigned Workout</p>

          <div className="workTabButtons">
            {tabBtnData.map((item) => (
              <button
                key={item.id}
                className={`workTabBtn ${tabShow === item.id && "active"} `}
                onClick={() => handleTabChange(item.id)}
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  className="workTabImage"
                />
                {item.text}
              </button>
            ))}
          </div>

          <div className="workTabContentContainer mt-5">
            {tabShow === 1 && (
              <div className="row">
                {workoutdata.map((item, index) => (
                  <div
                    key={item.day}
                    className="col-lg-2 col-md-3 col-sm-4 col-6"
                  >
                    <div className="workOutDaysTabContent">
                      <h1 className="lgHeading">{item.day}</h1>
                      {item.exercises.map((item, index) => (
                        <div key={index} className="workDataCard">
                          <h5 className="mdHeading">{item.exercise}</h5>
                          <p className="mainText">
                            4 set x 10 reps <br />
                            {item.weight && item.weight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tabShow === 2 && "Core Content"}
            {tabShow === 3 && "Chest Content"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutSection;
