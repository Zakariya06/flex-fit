import React from "react";
import DashboardLayout from "../../DashboardLayout";
import TextHeader from "@/components/dashboard/TextHeader";
import Link from "next/link";
import back_arrow from "@/public/assets/back_link_arrow.png";
import Image from "next/image";
import WorkoutSection from "@/components/dashboard/clientList/WorkoutSection";

function WorkOutDetailsPage() {
  return (
    <DashboardLayout>
      <div className="workOutDetailsPage">
        <TextHeader
          title="Workouts"
          text="Lorem ipsum dolor sit amet consectetur adipiscing"
          className="smTextHeader"
        />

        <Link href={"/dashboard/workouts"} className="d-block my-4">
          <Image
            src={back_arrow}
            alt="back"
            className="clientPagebackArrow d-bock"
          />
        </Link>

        <div className="row">
          <div className="col-lg-8">
            <WorkoutSection />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default WorkOutDetailsPage;
