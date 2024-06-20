export const columnDefinitions: Column[] = [
  {
    headerName: "Created",
    property: "timestamp",
    cell: (value: Date) => (
      <div>
        <p className="text-sm">
          {value.toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-xs text-gray-400">
          {value.toLocaleTimeString("en", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
        </p>
      </div>
    ),
  },
  {
    headerName: "Name",
    property: "name",
    cell: (value: string, row: ReportsList) => (
      <div>
        <p className="text-sm">{value}</p>
        <p className="text-xs text-gray-400">{row.email}</p>
      </div>
    ),
  },
  {
    headerName: "Type",
    property: "type",
  },
  {
    headerName: "Risk Score",
    property: "score",
  },
  {
    headerName: "Status",
    property: "status",
  },
];

export const pieChartDefinitions: PieSlice[] = [
  {
    label: "Approved",
    property: "approved",
    color: "rgba(139, 194, 75, 1)",
  },
  {
    label: "Rejected",
    property: "rejected",
    color: "rgba(255, 152, 0, 1)",
  },
  {
    label: "Cancelled",
    property: "cancelled",
    color: "rgba(255, 87, 33, 1)",
  },
  {
    label: "Ready for Review",
    property: "ready",
    color: "rgba(246, 245, 0, 1)",
  },
  {
    label: "In Progress",
    property: "review",
    color: "rgba(0, 168, 244, 1)",
  },
];
