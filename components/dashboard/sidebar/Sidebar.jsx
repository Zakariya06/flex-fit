import Image from "next/image";
import { useRouter } from "next/router";
import logo_lg from "@/public/assets/brand_logo.png";
import logo_sm from "@/public/assets/logo_icon.png";
import expent_arrow from "../../../public/assets/expent_arrow.svg";
import home_icon from "../../../public/assets/home_icon.svg";
import Clients_List from "../../../public/assets/Clients_List_icon.svg";
import Analytics_icon from "../../../public/assets/Analytics_icon.svg";
import runing_icon from "../../../public/assets/runing_icon.svg";
import setting_icon from "../../../public/assets/setting_icon.svg";
import bell_icon from "../../../public/assets/bell_icon.svg";
import profile_img from "../../../public/assets/side_profile.png";
import Link from "next/link";

export default function Sidebar({ isExpanded, setIsExpanded, isShow }) {
  const router = useRouter();

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""} ${isShow && "show"}`}
    >
      <div className="d-flex flex-column h-100">
        <div className="nav-items">
          <div className="logoItem">
            <Image
              src={isExpanded ? logo_lg : logo_sm}
              alt="brand Logo"
              className="sidebarbrandLogo"
            />
          </div>
          <div
            className="nav-item expandItem"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Image
              src={expent_arrow}
              className="sidebarIcon"
              alt="expand"
              style={{ transform: `rotate(${isExpanded ? "180" : "0"}deg)` }}
            />
            {isExpanded && <span>Expand</span>}
          </div>

          <div className="spaceLine"></div>

          <Link
            href={"/"}
            className={`nav-item ${router.pathname === "/" ? "active" : ""}`}
          >
            <Image src={home_icon} className="sidebarIcon" alt="Home" />
            {isExpanded && <span>Home</span>}
          </Link>

          <Link
            href={"/dashboard/client_list"}
            className={`nav-item ${
              router.pathname.startsWith("/dashboard/client_list")
                ? "active"
                : ""
            }`}
          >
            <Image
              src={Clients_List}
              className="sidebarIcon"
              alt="Clients List"
            />
            {isExpanded && <span>Clients List</span>}
          </Link>

          <Link
            href={"#"}
            className={`nav-item ${
              router.pathname.startsWith("/dashboard/analytics") ? "active" : ""
            }`}
          >
            <Image
              src={Analytics_icon}
              className="sidebarIcon"
              alt="Analytics"
            />
            {isExpanded && <span>Analytics</span>}
          </Link>

          <Link
            href={"/dashboard/workouts"}
            className={`nav-item ${
              router.pathname.startsWith("/dashboard/workouts") ? "active" : ""
            }`}
          >
            <Image src={runing_icon} className="sidebarIcon" alt="Running" />
            {isExpanded && <span>Workouts</span>}
          </Link>

          <Link
            href={"#"}
            className={`nav-item ${
              router.pathname.startsWith("/dashboard/settings") ? "active" : ""
            }`}
          >
            <Image src={setting_icon} className="sidebarIcon" alt="Settings" />
            {isExpanded && <span>Settings</span>}
          </Link>

          <Link href={"#"} className="nav-item">
            <div className="notifcationIconWrapper">
              <div className="notifcationBell">0</div>
              <Image
                src={bell_icon}
                className="sidebarIcon"
                alt="Notifications"
              />
            </div>
            {isExpanded && <span>Notifications</span>}
          </Link>
        </div>

        <div className="mt-auto">
          <Link
            href={""}
            className={`nav-item profile ${
              router.pathname.startsWith("/profile") ? "active" : ""
            }`}
          >
            <div className="notifcationIconWrapper">
              <div className="notifcationBell onlineStatus"></div>
              <Image src={profile_img} alt="Profile" className="profileImage" />
            </div>
            {isExpanded && <span>Profile</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
