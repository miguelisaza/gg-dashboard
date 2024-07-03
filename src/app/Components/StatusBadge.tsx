import React from "react";
import { KYCStatusesEnum } from "../utils/enums";

const StatusBadge = ({ status = "" }) => {
  const getBadgeColors = (status: string) => {
    switch (status) {
      default:
        return "bg-gray-50 text-gray-600 ring-gray-500/10";
      case KYCStatusesEnum["progress"]:
        return "bg-blue-50 text-blue-700 ring-blue-700/10";
      case KYCStatusesEnum["rejected"]:
        return "bg-red-50 text-red-700 ring-red-600/10";
      case KYCStatusesEnum["review"]:
        return "bg-purple-50 text-purple-700 ring-purple-700/10";
      case KYCStatusesEnum["approved"]:
        return "bg-green-50 text-green-700 ring-green-600/20";
    }
  };

  return (
    <div
      className={`${getBadgeColors(
        status
      )} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset`}>
      {status}
    </div>
  );
};

export default StatusBadge;
