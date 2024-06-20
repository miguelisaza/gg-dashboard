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
