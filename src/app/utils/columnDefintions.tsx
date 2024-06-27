import { getItemAttributesByLabel } from ".";

export const columnDefinitions: Column[] = [
  {
    headerName: "Created",
    property: "timestamp",
    cell: (_, row: Item) => {
      const createdDate = new Date(row.createdAt);
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
    cell: (_, row: Item) => {
      const firstName = getItemAttributesByLabel(
        row.attributes,
        "First name"
      ) as string;
      const middleName = getItemAttributesByLabel(
        row.attributes,
        "Middle name"
      ) as string;
      const lastName = getItemAttributesByLabel(
        row.attributes,
        "Last name"
      ) as string;

      const email = getItemAttributesByLabel(row.attributes, "Email") as string;

      return (
        <div>
          <p className="text-sm">{`${firstName} ${middleName} ${lastName}`}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      );
    },
  },
  {
    headerName: "Type",
    property: "type",
  },
  {
    headerName: "Risk Score",
    property: "score",
    cell: (_, row: Item) => {
      const risk = row.riskScoring.currentCategory;

      return risk ?? "Not Calculated";
    },
  },
  {
    headerName: "Status",
    property: "statusName",
  },
];

export const pieChartDefinitions: PieSlice[] = [
  {
    label: "Approved",
    color: "rgba(139, 194, 75, 1)",
  },
  {
    label: "Rejected",
    color: "rgba(255, 152, 0, 1)",
  },
  {
    label: "Cancelled",
    color: "rgba(255, 87, 33, 1)",
  },
  {
    label: "Ready For Review",
    color: "rgba(246, 245, 0, 1)",
  },
  {
    label: "In Progress",
    color: "rgba(0, 168, 244, 1)",
  },
];
