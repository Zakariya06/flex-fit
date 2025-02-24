import plus_icon from "@/public/assets/plus_icon.svg";
import Button from "@/components/Button";
import OptionInput from "@/components/OptionsInput";
import Input from "@/components/Input";
import InputTextArea from "@/components/InputTextArea";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

function WorkoutModalContent({ setFormData }) {
  const [youtubeLink, setYoutubeLink] = useState(
    "https://youtube.com/shorts/D1y1-sXZDA0?si=AiX6_zTSG1Zm1mHe"
  );

  const [details, setDetails] = useState([
    { 
      sets: "1 sets",
      reps: "10 reps",
      weight: "15 Kg/33 Lbs",
    },
  ]); // Start with an empty array
  const [selectedSets, setSelectedSets] = useState("1 sets");
  const [selectedReps, setSelectedReps] = useState("10 reps");
  const [selectedWeight, setSelectedWeight] = useState("15 Kg/33 Lbs");

  const handleAddWorkout = () => {
    setDetails([
      ...details,
      { 
        sets: selectedSets,
        reps: selectedReps,
        weight: selectedWeight,
      },
    ]);
  };

  return (
    <div className="WorkoutModalContent">
      <div className="row row-gap-5">
        <div className="col-12">
          <OptionInput
            options={["Chest", "Full body", "Core"]}
            label="Select Target Muscle"
          />
        </div>
        <div className="col-12">
          <OptionInput
            options={["Bench Press", "Bench Press", "Bench Press"]}
            label="Select Exercise"
            name="exercise"
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <OptionInput
            options={["1 sets", "2 sets", "3 sets"]}
            label="Set"
            name="sets"
            value={selectedSets}
            onChange={(e) => setSelectedSets(e.target.value)}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <OptionInput
            options={["10 reps", "5 reps", "15 reps"]}
            label="Reps"
            name="reps"
            value={selectedReps}
            onChange={(e) => setSelectedReps(e.target.value)}
          />
        </div>
        <div className="col-lg-4 col-sm-6">
          <OptionInput
            options={["15 Kg/33 Lbs", "10 Kg/39 Lbs", "9 Kg/32 Lbs"]}
            label="Weight"
            name="weight"
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
          />
        </div>
        <div className="col-lg-2 col-sm-6">
          <Button
            type="button"
            image={plus_icon}
            className="bg-dark modalButtonAddIcon" 
            onClick={handleAddWorkout}
          />
        </div>
        <div className="col-12">
          {details.map((item, index) => (
            <div key={index} className="workData">
              {item.sets},{item.reps}, {item.weight}
            </div>
          ))}
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
    </div>
  );
}

export default WorkoutModalContent;
