import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import award_image from "@/public/assets/award.png";
import emoji_1 from "@/public/assets/emoji_1.png";
import emoji_2 from "@/public/assets/emoji_2.png";
import emoji_3 from "@/public/assets/emoji_3.png";
import InputTextArea from "@/components/InputTextArea";
import Button from "@/components/Button";
import { useState } from "react";

function WorkoutFedbackCanvs({ show, handleClose, resetTimer }) {
  const [activeEmoji, setActiveEmoji] = useState(3);

  return (
    <Offcanvas
      show={show}
      className="workoutFeedbackCanvas"
      placement="bottom"
      onHide={handleClose}
      style={{ maxHeight: "80vh", height: "100%" }}
    >
      <Offcanvas.Body className="p-4 pb-5">
        <div className="workoutFeedbackContent">
          <div className="workoutFeedbackHeader">
            <Image src={award_image} className="awardImage" alt="award" />
            <h3 className="mdHeading">Congratulations</h3>
            <p className="mainText col-10 mx-auto">
              {" "}
              You've made great progress and put in the hard work.
            </p>

            <div className="emojiesContainer">
              <div
                className={`emojie ${activeEmoji === 1 ? "active" : ""}`}
                onClick={() => setActiveEmoji(1)}
              >
                <Image src={emoji_1} className="emojiImage" alt="emoji" />
              </div>
              <div
                className={`emojie ${activeEmoji === 2 ? "active" : ""}`}
                onClick={() => setActiveEmoji(2)}
              >
                <Image src={emoji_2} className="emojiImage" alt="emoji" />
              </div>
              <div
                className={`emojie ${activeEmoji === 3 ? "active" : ""}`}
                onClick={() => setActiveEmoji(3)}
              >
                <Image src={emoji_3} className="emojiImage" alt="emoji" />
              </div>
            </div>

            <InputTextArea
              label="Feedback"
              value="I felt good overall, but struggled a bit with the last few reps. My form was solid in the beginning, but I started feeling fatigued towards the end."
            />

            <Button
              className="mt-3 active"
              value="Submit"
              onClick={() => {
                handleClose();
                resetTimer();
              }}
            />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default WorkoutFedbackCanvs;
