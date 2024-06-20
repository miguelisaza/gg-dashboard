"use client";

import PieChart from "./Components/PieChart";
import Table from "./Components/Table";
import {
  columnDefinitions,
  pieChartDefinitions,
} from "./utils/columnDefintions";
import { data, pieData } from "./utils/mockData";

const Dashboard = () => {
  return (
    <main className="flex flex-col max-w-[1260px] m-auto p-6 lg:px-20 lg:py-12">
      <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
      <div className="bg-white p-4 rounded border shadow-md">
        <div className="flex flex-wrap justify-center">
          <div className="flex-none">
            <h2 className="text-xl font-semibold mb-4 text-center">
              KYC Application Reports
            </h2>
            <PieChart
              data={pieData}
              pieChartDefinitions={pieChartDefinitions}
            />
          </div>
          <div className="flex-auto">
            <Table columns={columnDefinitions} rows={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
