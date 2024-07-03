import { NextRequest } from "next/server";
import { getItemAttributesByLabel, countStatusOccurrences } from "../utils";
import { KYCStatusesEnum } from "../utils/enums";

interface ApiRequestSearchParams {
  status: keyof typeof KYCStatusesEnum;
}
const myHeaders = new Headers();
myHeaders.append("apiKey", process.env.API_KEY as string);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

export async function GET(req: NextRequest) {
  const { status } = Object.fromEntries(
    req.nextUrl.searchParams
  ) as unknown as ApiRequestSearchParams;

  const filterValue = KYCStatusesEnum[status];

  const res = await fetch(process.env.REQUEST_URL as string, requestOptions);
  const data: ApiResponse = await res.json();

  // Retrieve only the needed information
  let processedItems = data.items.map((item) => {
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

  // If there is a matching filter, apply it to the list
  if (filterValue) {
    processedItems = processedItems.filter(
      ({ statusName }) => statusName === filterValue
    );
  }
  const statusSummary = countStatusOccurrences(statuses);

  return Response.json({ data: processedItems, statusSummary });
}
