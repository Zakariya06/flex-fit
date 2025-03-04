import FooterBar from "@/components/mobilepages/clientdashboard/FooterBar";
import ProfileHeader from "@/components/mobilepages/clientdashboard/ProfileHeader";
import WarningCard from "@/components/mobilepages/clientdashboard/WarningCard";
import WorkoutPlan from "@/components/mobilepages/clientdashboard/WorkoutPlan";
import { useState } from "react";
import CliendLayout from "./CliendLayout";

const ClientDashboard = () => {
  const daysOfWeek = ["T", "W", "T", "F", "S", "S", "M"];
  const [activeIndex, setActiveIndex] = useState(2);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <CliendLayout>
      <div className="ClientDashboardMobilePageColWrapper">
        <ProfileHeader />
        <WarningCard />

        <div className="workDaysTabsContainer">
          {Array.from({ length: 7 }).map((_, index) => (
            <button
              key={index}
              className={`workDayTab ${index === activeIndex && "active"}`}
              onClick={() => handleTabClick(index)}
            >
              <span className="tabDay">{daysOfWeek[index]}</span>
              <span className="tabDayDate">{index + 8}</span>
            </button>
          ))}
        </div>

        <WorkoutPlan />

        <FooterBar />
      </div>
    </CliendLayout>
  );
};

export default ClientDashboard;
