import React, { useState } from "react";
import edit_icon from "@/public/assets/edit_icon.png";
import full_body from "@/public/assets/full_body.png";
import Core from "@/public/assets/Core.png";
import chest from "@/public/assets/chest.png";
import add_new_icon from "@/public/assets/add_new_icon.png";
import Plus_icon_black from "@/public/assets/Plus_icon_black.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "@/components/Button";
import WorkoutModal from "../../modal/WorkoutModal";

function ClientInfoCard({ task, canvasShow }) {
  const [show, setShow] = useState(false);
  const [filterIndex, setFilterIndex] = useState(0);
  const [tabShow, setTabShow] = useState(1);
  const daysData = useSelector((state) => state.workout.daysTasks);

  const handleClose = () => setShow(false);
  const handleShow = (idx) => {
    setFilterIndex(idx);
    setShow(true);
  };

  const handleTabChange = (tabId) => {
    setTabShow(tabId);
  };
  console.log(daysData);

  const getStatusImages = (status) => {
    switch (status) {
      case "Full body":
        return full_body;
      case "Completed":
        return Core;
      default:
        return chest;
    }
  };

  return (
    <>
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
            {task[0]?.map((item, index) => (
              <button
                key={index}
                className={`workTabBtn ${tabShow === index + 1 && "active"} `}
                onClick={() => handleTabChange(index + 1)}
              >
                <Image
                  src={getStatusImages(item)}
                  alt={item}
                  className="workTabImage"
                />
                {item}
              </button>
            ))}

            <button className={`workTabBtn`} onClick={canvasShow}>
              <Image
                src={add_new_icon}
                alt={"add new icon"}
                className="workTabImage"
              />
              Add Wokout
            </button>
          </div>

          <div className="workTabContentContainer mt-5">
            {tabShow === 1 && (
              <div className="row">
                {daysData.map((item, index) => (
                  <div
                    key={item.day}
                    className="col-lg-2 col-md-3 col-sm-4 col-6"
                  >
                    <div className="workOutDaysTabContent">
                      <h1 className="lgHeading">{item.day}</h1>
                      {item.tasks.map((item, index) => (
                        <div key={index} className="workDataCard">
                          <Image
                            src={edit_icon}
                            alt={"edit icon"}
                            className="workIcon mb-2"
                          />
                          <h5 className="mdHeading">{item.exercise}</h5>
                          <p className="mainText">
                            {item.sets} x {item.reps} <br />
                            {item.weight && item.weight}
                          </p>
                        </div>
                      ))}

                      <Button
                        image={Plus_icon_black}
                        className="active mb-3"
                        onClick={() => handleShow(index)}
                      />
                      {/* Assign Workout modal */}
                    </div>
                  </div>
                ))}
                <WorkoutModal
                  day={daysData[filterIndex].day}
                  show={show}
                  handleClose={handleClose}
                />
              </div>
            )}
            {tabShow === 2 && "Core Content"}
            {tabShow === 3 && "Chest Content"}
          </div>

          <div className="saveWorkButtons">
            <Button
              value="Save As Template"
              className="btnAuto capitalizeBtn"
            />
            <Button
              value="Save Workout Plan"
              className="active btnAuto capitalizeBtn"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientInfoCard;
