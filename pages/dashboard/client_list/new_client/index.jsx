import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import ClientChat from "@/components/dashboard/clientList/ClientChat";
import NewClientContent from "@/components/dashboard/clientList/newclient/NewClientContent";

function NewClient() {
  const [messages, setMessages] = useState([]);

  return (
    <DashboardLayout>
      <div className="ClientDetailsPage newClientPage">
        <div className="row">
          <div className="col-lg-9">
            <NewClientContent />
          </div>
          <div className="col-lg-3">
            <ClientChat messages={messages} setMessages={setMessages} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default NewClient;
