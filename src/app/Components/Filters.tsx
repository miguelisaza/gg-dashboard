import React from "react";
import { KYCStatusesEnum } from "../utils/enums";
import { updateFilter } from "../actions";

const statuses = Object.entries(KYCStatusesEnum);

const Filters = ({ activeStatus }: { activeStatus?: string }) => {
  return (
    <form
      action={updateFilter}
      className="flex w-full gap-1 mx-auto mb-4 items-center">
      <label
        htmlFor="statuses-select"
        className="block mb-2 w-44 text-md font-medium text-gray-900">
        Filter by Status:
      </label>
      <select
        id="statuses-select"
        name="status"
        defaultValue={activeStatus}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option>Select...</option>
        {statuses.map(([key, value]) => {
          return (
            <option value={key} key={key}>
              {value}
            </option>
          );
        })}
      </select>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        type="submit">
        Apply
      </button>
    </form>
  );
};

export default Filters;
