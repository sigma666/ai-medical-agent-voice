import { Button } from "@/components/ui/button";
import React from "react";
import HistoryList from "./_components/HistoryList";

function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">My Dashboard</h2>
        <Button>+Consult with a Doctor</Button>
      </div>
      <HistoryList />
    </div>
  );
}

export default Dashboard;
