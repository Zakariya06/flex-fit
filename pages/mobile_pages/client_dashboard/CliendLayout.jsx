import FooterBar from "@/components/mobilepages/clientdashboard/FooterBar"; 

function CliendLayout({ children }) {
  return (
    <div className="ClientDashboardMobilePage">
      <div className="col-lg-4 col-md-8 col-sm-10 mx-auto">{children}</div> 
    </div>
  );
}

export default CliendLayout;
