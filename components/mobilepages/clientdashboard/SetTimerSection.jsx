import Button from "@/components/Button";
import React, { useState, useEffect, useRef } from "react";
import { FiInfo } from "react-icons/fi";
import WorkoutFedbackCanvs from "./WorkoutFedbackCanvs";

function TimerWithProgressBar({ initialTime = 10 }) {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  //   bootstrap canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Start or stop the timer
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setRemainingTime(initialTime);
  };

  const calculateStrokeDashOffset = () => {
    const percentageComplete = (initialTime - remainingTime) / initialTime;
    const strokeDashOffsetValue = percentageComplete * 100;
    if (remainingTime <= 0) {
      handleShow();
    }
    return strokeDashOffsetValue;
  };

  useEffect(() => {
    const progressBar = document.querySelector(".js-progress-bar");
    if (progressBar) {
      progressBar.style.strokeDashoffset = calculateStrokeDashOffset();
    }
  }, [remainingTime]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <section className="setTimerSection">
        <div className="setTimerContent">
          <div className="setTimerLeftContent">
            <div className="timerText">{formatTime(remainingTime)}</div>
            <svg
              className="timerCircleSvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 34 34"
            >
              <circle
                cx="16"
                cy="16"
                r="15.9155"
                className="progress-bar__background"
              />
              <circle
                cx="16"
                cy="16"
                r="15.9155"
                className="progress-bar__progress js-progress-bar"
              />
            </svg>
          </div>
        </div>

        <div className="setTimerControls w-100">
          <div className="setTimeinfo">
            <FiInfo className="infoIcon" />
            Feel free to pause during your workout if you need a break, and
            resume whenever you're ready.
          </div>
          <Button
            value={isRunning ? "Pause" : "Start"}
            onClick={() => {
              toggleTimer();
            }}
            className="active"
          />
        </div>
      </section>

      <WorkoutFedbackCanvs
        show={show}
        handleClose={handleClose}
        resetTimer={resetTimer}
      />
    </>
  );
}

export default TimerWithProgressBar;
