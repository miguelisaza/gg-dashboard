"use server";

import { redirect } from "next/navigation";
import { KYCStatusesEnum } from "./utils/enums";
const validStatuses = Object.keys(KYCStatusesEnum);

export const updateFilter = async (formData: FormData) => {
  const selectedStatus = formData.get("status") as KYCStatusesEnum;

  if (validStatuses.includes(selectedStatus)) {
    redirect(`?status=${selectedStatus}`);
  } else {
    redirect("/");
  }
};
