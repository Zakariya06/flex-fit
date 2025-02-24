import React from "react";
import TextHeader from "../TextHeader";
import Image from "next/image";
import overview_card_1 from "@/public/assets/overview_card_1.png";
import overview_card_2 from "@/public/assets/overview_card_2.png";
import overview_card_3 from "@/public/assets/overview_card_3.png";
import CountUp from "react-countup";

const Overview = () => {
  const data = [
    {
      title: "Total Clients",
      number: "123",
      image: overview_card_1,
    },
    {
      title: "Active Clients",
      number: "112",
      image: overview_card_1,
    },
    {
      title: "Workout Completed",
      number: "11",
      image: overview_card_2,
    },
    {
      title: "Feedback Pending",
      number: "54",
      image: overview_card_3,
    },
  ];

  return (
    <section className="overViewSection">
      <TextHeader
        title="Overview"
        text="Lorem ipsum dolor sit amet consectetur adipiscing"
        className="smTextHeader mb-2"
      />

      <div className="overviewCards">
        <div className="row row-gap-3">
          {data.map((item, index) => (
            <div key={item.title} className="col-lg-3 col-sm-6">
              <div className="overviewCard">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="overcardImage"
                />
                <div className="overviewCardText">
                  <p className="mainText">{item.title}</p>
                  <h1 className="lgHeading">
                    <CountUp end={item.number}  duration={3}/>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
