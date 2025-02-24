import Image from "next/image";
import Link from "next/link";
import back_arrow from "@/public/assets/back_link_arrow.png";
import ClientInfoSection from "./ClientInfoSection";
import ProgressTrackerSection from "./ProgressTrackerSection";
import WorkoutSection from "./WorkoutSection";

function ClientDetailsPageContent() {
  return (
    <div className="ClientDetailsPageContent">
      <Link href={"/dashboard/client_list"}>
        <Image
          src={back_arrow}
          alt="back"
          className="clientPagebackArrow d-bock"
        />
      </Link>

      <ClientInfoSection />
      <ProgressTrackerSection />
      <WorkoutSection />
    </div>
  );
}

export default ClientDetailsPageContent;
