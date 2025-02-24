import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import back_link_arrow from "@/public/assets/back_link_arrow.png";
import arrow_next from "@/public/assets/arrow_next.svg";
import arrow_back from "@/public/assets/arrow_back.svg";
import Image from "next/image";
import StepFormButton from "../clientList/components/StepFormButton";
import SetWorkoutPlanContent from "../clientList/components/SetWorkoutPlanContent";
import Button from "@/components/Button";
import SetAssignWorkouts from "../clientList/components/SetAssignWorkouts";
import { useDispatch } from "react-redux";
import { addTask } from "@/features/workoutSlice";

function CreateCanvas({ show, handleClose }) {
  const dispatch = useDispatch()
 
  const [step, setStep] = useState(1);
  const [workOutvalue, setWorkOutValue] = useState(null)
 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);  
    const data = Object.fromEntries(formData.entries());   
    console.log(data); 
    dispatch(addTask(workOutvalue))
    handleClose()
  };
  
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      backdrop="static"
      style={{ maxWidth: "800px", width: "100%" }}
      className="createCanvas"
    >
      <Offcanvas.Header>
        <Image
          src={back_link_arrow}
          alt="back"
          className="backLinkImages me-3"
          onClick={handleClose}
        />
        <Offcanvas.Title>Create a Workout Plan</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="createCanvasBody">
        <StepFormButton step={step} setStep={setStep} />
        <form className="stepFormContainer" onSubmit={handleSubmit}>
            {step === 1 &&  <SetWorkoutPlanContent />}
            {step === 2 &&  <SetAssignWorkouts setWorkOutValue={setWorkOutValue} />} 
            {step === 3 &&  <SetWorkoutPlanContent isOptions={true} setWorkOutValue={setWorkOutValue} /> } 
         

          <div className="stepFormToggleButtons">
            <Button
              onClick={(e) => {
                if (step > 1) {
                  e.preventDefault(); 
                  setStep(step - 1); 
                }
              }} 
              disabled={step < 2 && true}
              type="button"
              value="Previous"
              image={arrow_back}
            />
            <Button
                onClick={(e) => {
                  if (step < 3) {
                    e.preventDefault(); 
                    setStep(step + 1); 
                  }
                }}
              type={step >= 3 ? "submit" : "button"}
              value={step === 3 ? "Submit" : "Next"}
              image={arrow_next}
              className="reverceBtn active"
            />
          </div>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CreateCanvas;
