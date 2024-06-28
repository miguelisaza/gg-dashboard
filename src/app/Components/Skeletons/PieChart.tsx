import React from "react";

const PieChartSkeleton = () => {
  return (
    <>
      <div className="w-[350px] h-[350px] bg-gray-300 rounded-full animate-pulse"></div>
      <div className="mt-4 w-80 h-[30px] bg-gray-300 rounded animate-pulse"></div>
    </>
  );
};

export default PieChartSkeleton;
