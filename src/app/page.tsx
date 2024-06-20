"use client";

import Table from "./Components/Table";
import { columnDefinitions } from "./utils/columnDefintions";
import { data } from "./utils/mockData";

const Dashboard = () => {
  return (
    <main className="flex flex-col max-w-[1260px] m-auto p-6 lg:px-20 lg:py-12">
      <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
      <div className="bg-white p-4 rounded border shadow-md">
        <h2 className="text-xl mb-4">KYC Application Reports</h2>
        <div className="flex">
          <div className="flex-auto">
            <Table columns={columnDefinitions} rows={data} />
          </div>
          <div className="flex-auto">Pie</div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
