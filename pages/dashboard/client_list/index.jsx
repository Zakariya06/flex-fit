import React from "react";
import DashboardLayout from "../DashboardLayout";
import ClientListHeader from "@/components/dashboard/clientList/ClientListHeader";
import ClientWorkOutCard from "@/components/dashboard/home/ClientWorkOutCard";
import workoutData from "@/data/workout.json";
import Pagination from "@/components/dashboard/Panigation";
import Link from "next/link";

function ClientList() {
  return (
    <DashboardLayout>
      <ClientListHeader />
      <div className="clientListPage">
        <div className="row row-gap-4">
          {workoutData.workouts.map((workout) => (
            <div key={workout.id} className="col-xl-4 col-md-6">
              <Link href={"/dashboard/client_list/clients_details_view"}>
                <ClientWorkOutCard {...workout} />
              </Link>
            </div>
          ))}
        </div>

        <Pagination />
      </div>
    </DashboardLayout>
  );
}

export default ClientList;
