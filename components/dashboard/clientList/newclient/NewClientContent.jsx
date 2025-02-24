import Image from "next/image";
import Link from "next/link";
import back_arrow from "@/public/assets/back_link_arrow.png";
import ClientInfoSection from "../ClientInfoSection";
import ProgressTrackerSection from "../ProgressTrackerSection";
import WorkoutSection from "../WorkoutSection";
import CreateWorkOutPlan from "../components/CreateWorkOutPlan";

function NewClientContent() {
  return (
    <div className="ClientDetailsPageContent newClientContent">
      <Link href={"/dashboard/client_list"}>
        <Image
          src={back_arrow}
          alt="back"
          className="clientPagebackArrow d-bock"
        />
      </Link>
      <ClientInfoSection isNew={true} />
      <ProgressTrackerSection isData={false} />
      <CreateWorkOutPlan />
    </div>
  );
}

export default NewClientContent;
