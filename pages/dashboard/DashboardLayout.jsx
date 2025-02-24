import Header from "@/components/dashboard/mobileHeader/Header";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { useEffect, useState } from "react";

function DashboardLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsExpanded(true);
      }
      else{
        setIsExpanded(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header setIsShow={setIsShow} />
      <div className="dashboardPageWrapper">
        <Sidebar 
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        isShow={isShow}
       />

        <div className={`main-content ${isExpanded ? "expanded" : ""}`}>
          <div className="container-fluid ">{children}</div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
