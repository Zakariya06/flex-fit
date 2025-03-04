import CliendLayout from "../CliendLayout";
import back_arrow from "@/public/assets/back_arrow.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import VideoContentSection from "@/components/mobilepages/clientdashboard/VideoContentSection";
import BenchEqupmentsSection from "@/components/mobilepages/clientdashboard/BenchEqupmentsSection";
import SetSection from "@/components/mobilepages/clientdashboard/SetSection";

const BenchPressPage = () => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <CliendLayout>
      <div className="ClientDashboardMobilePageColWrapper benchPressPage">
        <p onClick={handleBack} className="clientDshboardbackLink mb-3">
          <Image src={back_arrow} className="backArrow" alt="back" /> Bench
          Press
        </p>
        <VideoContentSection />

        <div className="BenchPressTextContent">
          <h1 className="mdHeading">Bench Press</h1>
          <p className="mainText">
            The bench press is a strength training exercise that targets the
            chest, shoulders, and triceps by pressing a weight upwards while
            lying on a bench.
          </p>
        </div>

        <BenchEqupmentsSection />
        <SetSection />
      </div>
    </CliendLayout>
  );
};

export default BenchPressPage;
