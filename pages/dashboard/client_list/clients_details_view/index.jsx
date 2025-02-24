import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import ClientDetailsPageContent from "@/components/dashboard/clientList/ClientDetailsPageContent";
import ClientChat from "@/components/dashboard/clientList/ClientChat";

function ClientDetailsPage() {
  const [messages, setMessages] = useState([
    { text: "Hi!", sender: "me", time: "10:10" },
    {
      text: "great job on the workout! Let's reduce deadlift weight and focus on form to avoid soreness. Keep going! 💪",
      sender: "me",
      time: "10:11",
    },
    {
      text: "Can we switch my plan to focus on strength?",
      sender: "them",
      time: "10:11",
    },
    {
      text: "Sure! I'll update it with heavier weights. Changes will be live tomorrow. 🔥",
      sender: "me",
      time: "10:12",
    },
  ]);

  return (
    <DashboardLayout>
      <div className="ClientDetailsPage">
        <div className="row">
          <div className="col-lg-9">
            <ClientDetailsPageContent />
          </div>
          <div className="col-lg-3">
            <ClientChat messages={messages} setMessages={setMessages} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClientDetailsPage;
