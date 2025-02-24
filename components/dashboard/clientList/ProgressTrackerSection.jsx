import React from "react";
import ClientDetailHeader from "./ClientDetailHeader";
import { WeeklyPerformanceChart } from "../home/WeeklyPerformanceChart";
import WeekPerformanceLineChart from "./components/WeaklyPerformanceLineChart";
import no_data_icon from "@/public/assets/no_data_icon.png";
import Image from "next/image";

function ProgressTrackerSection({isData = true}) {
  const daysbarData = [
    { day: "M", value: 12 },
    { day: "T", value: 90 },
    { day: "W", value: 18 },
    { day: "T", value: 45 },
    { day: "F", value: 75 },
    { day: "S", value: 60 },
    { day: "S", value: 5 },
  ];
  return (
    <section className="ProgressTrackerSection py-2">
      <ClientDetailHeader
        title="Progress Tracker"
        text="Lorem ipsum dolor sit amet consectetur adipiscing"
        options={["Weekly", "Monthly", "Daily"]}
      />

      <div className="clientInfoCard  card border rounded-3 p-3  ">
        {isData ? (
          <div className="row row-gap-4">
            <div className="col-md-6">
              <div className="weekPerformance">
                <p className="textMuted  mb-2">Week Performance</p>
                <WeeklyPerformanceChart data={daysbarData} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="weekPerformance">
                <p className="textMuted  mb-2">Week Performance</p>
                <WeekPerformanceLineChart />
              </div>
            </div>
          </div>
        ) : (
          <div className="noDataContainer">
            <Image src={no_data_icon} alt="no data " className="noDataImage" />
            <h6 className="mdHeading">No Data To Show</h6>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProgressTrackerSection;
