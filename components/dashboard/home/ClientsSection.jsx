import React from "react";
import TextHeader from "../TextHeader";
import ClientWorkOutCard from "./ClientWorkOutCard";
import workoutData from "@/data/workout.json";

function ClientsSection() {
  return (
    <section className="ClientsSection">
      <TextHeader
        title="Clients"
        text="Lorem ipsum dolor sit amet consectetur adipiscing"
        className="smTextHeader mb-2"
      />

      <div className="clientCardsWrapper">
        <div className="row">
          {workoutData.workouts.map((workout) => (
            <div key={workout.id} className="clientCardCol">
              <ClientWorkOutCard {...workout} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
