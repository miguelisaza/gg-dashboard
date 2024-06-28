import PieChartSkeleton from "./Components/Skeletons/PieChart";
import TableSkeleton from "./Components/Skeletons/Table";

export default function Loading() {
  return (
    <>
      <div className="flex-none flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center">
          KYC Application Reports
        </h2>
        <PieChartSkeleton />
      </div>
      <div className="flex-auto xl:ml-8 mt-6 xl:mt-0">
        <TableSkeleton />
      </div>
    </>
  );
}
