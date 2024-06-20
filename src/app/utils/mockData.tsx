// Different Risk Scores
enum RiskScore {
  Low = 0,
  Medium = 1,
  High = 2,
}

export const data: ReportsList[] = [
  {
    timestamp: new Date(),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date(),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date(),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
];
