import React from "react";
import ClientDetailHeader from "./ClientDetailHeader";
import user_icon from "@/public/assets/client_user_1.png";
import date_icon from "@/public/assets/date_icon.png";
import gender_icon from "@/public/assets/gender_icon.png";
import weight_icon from "@/public/assets/weight_icon.png";
import height_icon from "@/public/assets/height_icon.png";
import workout_icon from "@/public/assets/workout_icon.png";
import Image from "next/image";

function ClientInfoSection({isNew= false}) {
  const cardData = [
    {
      icon: date_icon,
      title: "Date of Birth",
      text: "12 March 1988",
    },
    {
      icon: gender_icon,
      title: "Gender",
      text: "Male",
    },
    {
      icon: weight_icon,
      title: "Weight",
      text: "75 kg (165 lbs)",
    },
    {
      icon: height_icon,
      title: "Height",
      text: "5'10 (178 cm)",
    },
    {
      icon: workout_icon,
      title: "Workout Experience",
      text: "Regular Workout",
    },
  ];

  return (
    <section className="ClientInfoSection py-4">
      <ClientDetailHeader
        title="Client Information"
        text="Lorem ipsum dolor sit amet consectetur adipiscing"
      />

      <div className="clientInfoCard  card border rounded-3 p-3  ">
        <div className="cardHeader d-flex justify-content-between align-items-center mb-3">
          <div className="userInfo d-flex align-items-center gap-2">
            <Image
              src={user_icon}
              alt="John Doe"
              width={40}
              height={40}
              className="rounded-circle"
            />
            <div>
              <h6 className="mdHeading">John Doe</h6>
              <p className="mainText">2 h ago</p>
            </div>
          </div> 
          <span className={`badge ${!isNew ? "bgWarning" : "bgNew"}`}>{!isNew ? "Feedback Pending" : "new"}</span>
        </div>

        <div className="row row-gap-4">
          {cardData.map((item, index) => (
            <div key={index} className="col-lg col-md-4 col-6">
              <div className="clientInfoDetailsCard">
                <Image src={item.icon} alt={item.title} className="clientInfoImage" />
                <p className="textMuted my-2">{item.title}</p>
                <h5 className="mdHeading">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientInfoSection;
