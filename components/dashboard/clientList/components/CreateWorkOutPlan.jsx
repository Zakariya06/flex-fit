import React, { useState } from "react";
import edit_icon from "@/public/assets/edit_icon.png";
import full_body from "@/public/assets/full_body.png";
import Core from "@/public/assets/Core.png";
import chest from "@/public/assets/chest.png";
import Image from "next/image";
import workoutdata from "@/data/workoutdays.json";
import create_workout_icon from "@/public/assets/create_workout_icon.png";
import Button from "@/components/Button";
import ClientDetailHeader from "../ClientDetailHeader";
import CreateCanvas from "../../Canvas/CreateCanvas";
import { useSelector } from "react-redux";
import ClientInfoCard from "./ClientInfoCard";

function CreateWorkOutPlan() {
  const task = useSelector((state) => state.workout.tasks);
  const [tabShow, setTabShow] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTabChange = (tabId) => {
    setTabShow(tabId);
  };

  const tabBtnData = []; 

  return (
    <>
      <section className="WorkoutSection py-3">
        <ClientDetailHeader
          title="Current Workout Plan"
          text="Lorem ipsum dolor sit amet consectetur adipiscing"
        />

        {task.length < 1   ? (
          <div className="clientInfoCard  card border rounded-3 p-3  ">
            <div className="col-lg-4 mx-auto">
              <div className="CreatePlanContent ">
                <Image
                  src={create_workout_icon}
                  alt="create new"
                  className="newWorkoutIcon"
                />
                <h4 className="mdHeading">Create a Workout Plan</h4>
                <p className="mainText">
                  Create personalized workout plans to match your clients'
                  fitness goals.
                </p>

                <Button
                  value="Create Plan "
                  image={edit_icon}
                  onClick={handleShow}
                />
              </div>
            </div>
          </div>
        ) : (
          <ClientInfoCard canvasShow={handleShow} task={task} />
        )}
      </section>
      {/* new Adding Canvas */}
      <CreateCanvas show={show} handleClose={handleClose} />
    </>
  );
}

export default CreateWorkOutPlan;
