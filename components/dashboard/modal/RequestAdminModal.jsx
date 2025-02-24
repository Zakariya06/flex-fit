import Image from "next/image";
import close_mark_icon from "@/public/assets/close_mark_icon.png";
import { Modal } from "react-bootstrap";
import Button from "@/components/Button";
import InputTextArea from "@/components/InputTextArea";
import OptionInput from "@/components/OptionsInput";
import Input from "@/components/Input";
import { useState } from "react";

function RequestAdminModal({ show, handleClose }) {
  const [inputName, setInputName] = useState("Skull Crusher");
  const [youtubeLink, setYoutubeLink] = useState(
    "https://youtube.com/shorts/D1y1-sXZDA0?si=AiX6_zTSG1Zm1mHe"
  );

  const handlSubmit = (e) => {
    e.preventDefault();
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
        <Modal.Title>Request Admin</Modal.Title>
        <Image
          src={close_mark_icon}
          alt="back"
          className="backLinkImages ms-auto"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body className="workoutModalbody">
        <form className="workoutModalForm" onSubmit={handlSubmit}>
          <div className="row row-gap-4">
            <div className="col-12">
              <OptionInput
                options={["Triceps", "Triceps", "Triceps"]}
                label="Select Target Muscle"
              />
            </div>
            <div className="col-12">
              <Input
                label="Exercise Name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <InputTextArea
                value="Skull crushers — no exercise has a name more intimidating than this. Sure, burpees are difficult, but their name sounds harmless enough. However, skull crushers have self-inflicted harm written all over them."
                label="Exercise Description"
              />
            </div>
            <div className="col-12">
              <Input
                value={youtubeLink}
                label="Auggested Video"
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
            </div>
            <div className="col-12">
              <InputTextArea
                value="Weight bench and either a straight barbell, pre-loaded or fixed bar, or an EZ-grip bar."
                label="Equipments Required"
              />
            </div>
          </div>

          <div className="workoutFormSubmitBtn">
            <Button value="Submit" className="active" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default RequestAdminModal;
