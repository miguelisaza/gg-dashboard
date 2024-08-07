import Filters from "./Components/Filters";
import PieChart from "./Components/PieChart";
import Table from "./Components/Table";
import {
  columnDefinitions,
  pieChartDefinitions,
} from "./utils/columnDefintions";
import { KYCStatusesEnum } from "./utils/enums";

type FilterSearchParams = { status?: keyof typeof KYCStatusesEnum };

const Dashboard = async ({
  searchParams,
}: {
  searchParams: FilterSearchParams;
}) => {
  const activeStatus = searchParams.status;

  const fetchInfo = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL as string}${
        activeStatus ? `?status=${activeStatus}` : ""
      }`
    );

    if (!res.ok) {
      throw new Error("Failed to Load Dashboard");
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
        <Filters activeStatus={activeStatus} />
        <Table columns={columnDefinitions} rows={newData.data} />
      </div>
    </>
  );
};

export default Dashboard;
