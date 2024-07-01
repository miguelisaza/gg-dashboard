import RiskScoreBadge from "../Components/RiskScoreBadge";
import StatusBadge from "../Components/StatusBadge";

export const columnDefinitions: Column[] = [
  {
    headerName: "Created",
    property: "createdAt",
    cell: (value) => {
      const createdDate = new Date(value);
      return (
        <div>
          <p className="text-sm">
            {createdDate.toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-gray-400">
            {createdDate.toLocaleTimeString("en", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </p>
        </div>
      );
    },
  },
  {
    headerName: "Name",
    property: "name",
    cell: (_, { fullName, email }) => {
      return (
        <div>
          <p className="text-sm">{fullName}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      );
    },
  },
  {
    headerName: "Type",
    headerClassName: "text-center",
    property: "type",
    cell: (type) => {
      return <p className="text-sm text-center">{type ?? "-"}</p>;
    },
  },
  {
    headerName: "Risk Score",
    property: "riskScore",
    cell: (riskScore) => {
      return <RiskScoreBadge status={riskScore ?? "Not Calculated"} />;
    },
  },
  {
    headerName: "Status",
    property: "statusName",
    cell: (statusName) => {
      return <StatusBadge status={statusName} />;
    },
  },
];

export const pieChartDefinitions: PieSlice[] = [
  {
    label: "Approved",
    color: "#4ade80",
  },
  {
    label: "Rejected",
    color: "#f87171",
  },
  {
    label: "Cancelled",
    color: "#a8a29e",
  },
  {
    label: "Ready For Review",
    color: "#d8b4fe",
  },
  {
    label: "In Progress",
    color: "#60a5fa",
  },
];
