// Table Column Types
interface Column {
  headerName: string;
  property: string;
  cell?: (value, row: any) => ReactNode;
}

// Type of the Mock Data
interface ReportsList {
  timestamp: Date;
  name: string;
  email: string;
  type: string;
  score: RiskScore;
  status: string;
}

interface PieSlice {
  label: string;
  property: string;
  color: string;
}
