import PieChart from "./Components/PieChart";
import Table from "./Components/Table";
import {
  columnDefinitions,
  pieChartDefinitions,
} from "./utils/columnDefintions";

import TableSkeleton from "./Components/Skeletons/Table";
import PieChartSkeleton from "./Components/Skeletons/PieChart";

const Dashboard = async () => {
  const fetchInfo = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      cache: "no-store",
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
  const newData = await fetchInfo();

  return (
    <>
      <div className="flex-none flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center">
          KYC Application Reports
        </h2>
        <PieChart
          data={newData.statusSummary}
          pieChartDefinitions={pieChartDefinitions}
        />
      </div>
      <div className="flex-auto">
        <Table columns={columnDefinitions} rows={newData.data} />
      </div>
    </>
  );
};

export default Dashboard;
