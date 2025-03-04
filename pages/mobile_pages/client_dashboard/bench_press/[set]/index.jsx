import React from "react";
import CliendLayout from "../../CliendLayout";
import back_arrow from "@/public/assets/back_arrow.svg";
import Image from "next/image";
import VideoContentSection from "@/components/mobilepages/clientdashboard/VideoContentSection";
import { useRouter, useParams } from "next/navigation";
import SetTimerSection from "@/components/mobilepages/clientdashboard/SetTimerSection";

function setPage() {
  const router = useRouter();
  const params = useParams();
  const handleBack = () => router.back();

  return (
    <CliendLayout>
      <div className="ClientDashboardMobilePageColWrapper benchPressPage">
        <p onClick={handleBack} className="clientDshboardbackLink mb-3">
          <Image src={back_arrow} className="backArrow" alt="back" />{" "}
          {params?.set}
        </p>
        <VideoContentSection isSetsVisible={false} />

        <SetTimerSection />
      </div>
    </CliendLayout>
  );
}

export default setPage;
