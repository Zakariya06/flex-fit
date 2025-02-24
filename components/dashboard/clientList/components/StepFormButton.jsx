import React, { useState } from "react";

export default function StepFormButton({step, setStep}) {
  
  return (
    <div className="StepFormButton">
      <button className="StepButton" onClick={() => setStep(1)}>
        <div className={`buttonNumber ${step >= 1 && "active"}`}>1</div>
        <p className="mdHeading">Set Workout Plan</p>
      </button>
      <div className={`stepConnetLine ${step > 1 && "active"}`}>
        <div className="stepLineInner"></div>
      </div>
      <button className="StepButton" onClick={() => setStep(2)}>
        <div className={`buttonNumber ${step >= 2 && "active"}`}>2</div>
        <p className="mdHeading">Assign Workouts</p>
      </button>
      <div className={`stepConnetLine ${step > 2 && "active"}`}></div>
      <button className="StepButton" onClick={() => setStep(3)}>
        <div className={`buttonNumber ${step >= 3 && "active"}`}>3</div>
        <p className="mdHeading">Review & Submit</p>
      </button>
    </div>
  );
}
