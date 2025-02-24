import React from "react";
import DashboardLayout from "../DashboardLayout";
import WorkOutHeader from "@/components/dashboard/workouts/WorkOutHeader";
import Image from "next/image";
import WorkOutPageCard from "@/components/dashboard/workouts/WorkOutPageCard";
import workplanData from "@/data/workPlan";
import Pagination from "@/components/dashboard/Panigation";

function WorkOutPage() {
  return (
    <DashboardLayout>
      <WorkOutHeader />
      <div className="WorkOutPage">
        <div className="row mt-4 row-gap-4">
          {workplanData.map((item, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <WorkOutPageCard {...item} />
            </div>
          ))}
        </div>

        <Pagination totalPages={12} />
      </div>
    </DashboardLayout>
  );
}

export default WorkOutPage;
