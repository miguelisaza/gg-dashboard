"use client";

import PieChart from "./Components/PieChart";
import Table from "./Components/Table";
import { countStatusOccurrences } from "./utils";
import {
  columnDefinitions,
  pieChartDefinitions,
} from "./utils/columnDefintions";
import { data, pieData, apiData } from "./utils/mockData";

const Dashboard = () => {
  const getStatusAggregations = () => {
    const statuses = apiData.items.map((item) => item.statusName);
    const aggregations = countStatusOccurrences(statuses);
    return aggregations;
  };

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
              data={getStatusAggregations()}
              pieChartDefinitions={pieChartDefinitions}
            />
          </div>
          <div className="flex-auto">
            <Table columns={columnDefinitions} rows={apiData.items} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
