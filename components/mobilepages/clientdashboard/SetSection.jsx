import Button from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";
import check_box from "@/public/assets/check_icon.svg";
import Link from "next/link";

function SetSection() {
  const [isCheck, setIsCheck] = useState(1);

  const setData = [
    {
      set: "Set 1",
      data: "10 reps - 15 Kg/33 Lbs",
      status: true,
    },
    {
      set: "Set 2",
      data: "10 reps - 15 Kg/33 Lbs",
      status: false,
    },
    {
      set: "Set 3",
      data: "10 reps - 15 Kg/33 Lbs",
      status: false,
    },
  ];

  return (
    <section className="BenchEqupmentsSection setSection">
      <h1 className="mdHeading">Sets</h1>

      {setData.map((item, index) => (
        <div
          key={index}
          className="setCardContentWrapper"
          onClick={() => setIsCheck(index + 1)}
        >
          <div className="cardCheckBox">
            <div className="customCardCheckBox">
              {isCheck === index + 1 && (
                <Image src={check_box} alt="check" className="checkBoxIcon" />
              )}
            </div>
            {index !== setData.length - 1 && (
              <div className="cardConnetLine"></div>
            )}
          </div>
          <div className="workPlanCard">
            <p className="chestText">10 min</p>
            <div className="workPlanRightContent">
              <h4 className="mdHeading">{item.set}</h4>
              <div className=" setCardButtonWrapper">
                <p className="mainText">{item.data}</p>
                <Link
                  href={`/mobile_pages/client_dashboard/bench_press/${item.set}`}
                >
                  <Button
                    value={item.status ? "Completed" : "Start"}
                    className="active"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SetSection;
