import Input from "@/components/Input";
import OptionInput from "@/components/OptionsInput";
import TagsInput from "@/components/TagsInput";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

function SetWorkoutPlanContent({isOptions = false, setWorkOutValue}) {
  const [from, setFrom] = useState("17/02/2025");
  const [to, setTo] = useState("24/03/2025");

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };
 

  const options = ["Strength Training", "Strength Training"];
  const tagOptions = ["Full body", "Core", "Chest"]
  return (
    <div className="SetWorkoutPlanContent">
      <div className="row row-gap-5">
        <div className="col-12">
          <OptionInput options={options} label="Select Workout Plan" />
        </div>
        <div className="col-sm-6">
          <Input
            type="date"
            className="optionInputHolder"
            label="Plan Duration From"
            onChange={handleFromChange}
            name="fromDate"
          />
        </div>
        <div className="col-sm-6">
          <Input
            type="date"
            className="optionInputHolder"
            label="Plan Duration To"
            onChange={handleToChange}
            name="toDate"
          />
        </div>
      </div>

      <div className="planCreatedDate">
        <CiCircleInfo className="infoIcon" size={20} />
        <p className="mainText">
          Plan is created for 6 weeks from {from} to {to}
        </p>
      </div>

      {isOptions && (
        <div className="SetWorkoutPlanContent my-4">
          <TagsInput setWorkOutValue={setWorkOutValue} name="workOptions" options={tagOptions} label="Select Workout" />
        </div>
      )}
    </div>
  );
}

export default SetWorkoutPlanContent;
