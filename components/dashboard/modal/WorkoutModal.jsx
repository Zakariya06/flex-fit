import Image from "next/image";
import React, { useState } from "react";
import close_mark_icon from "@/public/assets/close_mark_icon.png";
import { Modal } from "react-bootstrap";
import WorkoutModalContent from "../clientList/components/WorkoutModalContent";
import Button from "@/components/Button";
import { useDispatch } from "react-redux";
import { addDaysTask } from "@/features/workoutSlice";
import { nanoid } from "@reduxjs/toolkit";

function WorkoutModal({ day, show, handleClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  const handlSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Submit Workout", data);
    data.id = nanoid();
    dispatch(addDaysTask({ day, data }));
    handleClose();
  };
  return (
    <Modal
      className="workoutModal"
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Header className="border-0 ">
        <Modal.Title>Assign Workout - {day}</Modal.Title>
        <Image
          src={close_mark_icon}
          alt="back"
          className="backLinkImages ms-auto"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body className="workoutModalbody">
        <form className="workoutModalForm" onSubmit={handlSubmit}>
          <WorkoutModalContent setFormData={setFormData} />

          <div className="workoutFormSubmitBtn">
            <Button value="Submit" className="active" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default WorkoutModal;
