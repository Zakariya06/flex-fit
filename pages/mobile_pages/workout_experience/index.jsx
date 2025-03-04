import PageSlider from "@/components/mobilepages/PageSlider";
import React, { useState } from "react";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import Image from "next/image";
import Button from "@/components/Button";
import back_arrow from "@/public/assets/back_arrow.svg";
import Link from "next/link";
import { useRouter } from "next/router";
function WorkoutExperience() {
  const [isChecked, setIsChecked] = useState(null);

  const checkData = [
    {
      id: 1,
      name: "neverWorkedOut",
      label: "Never Worked out",
    },
    {
      id: 2,
      name: "newToWorkingOut",
      label: "Little Workout",
    },
    {
      id: 3,
      name: "workOutRegularly",
      label: "Work out regularly",
    },
  ];

  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="SignInMobilePage">
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="SignInMobilePageWrrper">
          <PageSlider />

          <div className="singInMobileContent  p-4">
            <div className="weightPageHead ">
              <p onClick={handleBack} className="backLink mb-3">
                <Image src={back_arrow} className="backArrow" alt="back" /> Back
              </p>
              <h1 className="lgHeading">
                Workout <span>Experience</span>
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>

              <div className="workoutExperienceContainer  ">
                {checkData.map((item) => (
                  <div
                    className="workoutExperienceItem"
                    key={item.id}
                    onClick={() => setIsChecked(item.id)}
                  >
                    <input
                      type="radio"
                      name={item.name}
                      id={item.id}
                      className="experienceRadio"
                      // Assuming you want to set height based on selection
                      checked={isChecked === item.id} // Ensure only one is selected at a time
                    />
                    <label htmlFor={item.id}>{item.label}</label>
                  </div>
                ))}
              </div>

              <Link href={"/mobile_pages/equipment"}>
                <Button value="Next" className="active mb-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutExperience;
