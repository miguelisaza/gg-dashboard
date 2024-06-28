import { getItemAttributesByLabel, countStatusOccurrences } from "../utils";

const myHeaders = new Headers();
myHeaders.append("apiKey", process.env.API_KEY as string);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

export async function GET() {
  const res = await fetch(process.env.REQUEST_URL as string, requestOptions);
  const data: ApiResponse = await res.json();

  // Retrieve only the needed information
  const processedItems = data.items.map((item) => {
    const { type, statusName, createdAt } = item;
    const firstName = getItemAttributesByLabel(
      item.attributes,
      "First name"
    ) as string;
    const middleName = getItemAttributesByLabel(
      item.attributes,
      "Middle name"
    ) as string;
    const lastName = getItemAttributesByLabel(
      item.attributes,
      "Last name"
    ) as string;

    const email = getItemAttributesByLabel(item.attributes, "Email") as string;
    const fullName = [firstName, middleName, lastName]
      .filter((name) => name !== "")
      .join(" ");
    const riskScore = item.riskScoring.currentCategory;

    return { createdAt, fullName, email, type, riskScore, statusName };
  });

  // Do the aggregation for the pieChart summary
  const statuses = processedItems.map((item) => item.statusName);
  const statusSummary = countStatusOccurrences(statuses);

  return Response.json({ data: processedItems, statusSummary });
}
