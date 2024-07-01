import React from "react";

const RiskScoreBadge = ({
  status,
}: {
  status: RiskScoring["currentCategory"];
}) => {
  const getBadgeColors = () => {
    switch (status) {
      default:
        return "fill-gray-500";
      case "high":
        return "fill-red-500";
      case "medium":
        return "fill-yellow-500";
      case "low":
        return "fill-green-500";
    }
  };

  return (
    <div
      className={`${getBadgeColors()} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-300`}>
      <svg
        className={`w-1.5 h-1.5 ${getBadgeColors()} mr-1`}
        viewBox="0 0 6 6"
        aria-hidden="true">
        <circle cx="3" cy="3" r="3"></circle>
      </svg>
      {status}
    </div>
  );
};

export default RiskScoreBadge;
