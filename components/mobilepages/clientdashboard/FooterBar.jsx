import React, { useState } from "react";
import Image from "next/image";
import home from "@/public/assets/Home_mobile_icon.png"
import workout from "@/public/assets/Workout_mobile_icon.png"
import analytics from "@/public/assets/Analytics_mobile_icon.png"
import notification from "@/public/assets/bell_icon.png"

function FooterBar() {
  const [isActive, setIsActive] = useState("home");
  return (
    <section className="FooterBar">
      <a href="#" className={`footerBarLinks ${isActive === "home" ? "active" : ""}`} onClick={() => setIsActive("home")}>
        <Image src={home} alt="home" className="footerBarlinkHomeImg" />
        {isActive === "home" && "Home"}
      </a>
      <a href="#" className={`footerBarLinks ${isActive === "workout" ? "active" : ""}`} onClick={() => setIsActive("workout")}>
        <Image src={workout} alt="home" className="footerBarlinkImg" />
        {isActive === "workout" && "Workout"}
      </a>
      <a href="#" className={`footerBarLinks ${isActive === "analytics" ? "active" : ""}`} onClick={() => setIsActive("analytics")}>
        <Image src={analytics} alt="analytics" className="footerBarlinkImg" />
        {isActive === "analytics" && "Analytics"}
      </a>
      <a href="#" className={`footerBarLinks ${isActive === "notification" ? "active" : ""}`} onClick={() => setIsActive("notification")}>
        <Image src={notification} alt="notification" className="footerBarlinkImg" />
        {isActive === "notification" && "Notification"}
      </a>
    </section>
  );
}

export default FooterBar;
