import TextHeader from "@/components/dashboard/TextHeader";
import DashboardLayout from "./dashboard/DashboardLayout";
import Overview from "@/components/dashboard/home/Overview";
import ClientsSection from "@/components/dashboard/home/ClientsSection";

function Home() {
  return (
    <DashboardLayout>
      <TextHeader
        title="Welcome back,"
        span={"Max"}
        text="Customize workouts, manage clients and drive results!" 
      />
      <Overview />
      <ClientsSection />
    </DashboardLayout>
  );
}

export default Home;
