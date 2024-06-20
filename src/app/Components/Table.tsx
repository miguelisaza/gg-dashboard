"use client";

import React from "react";

const Table = ({
  columns,
  rows,
}: {
  columns: Column[];
  rows: ReportsList[];
}) => {
  const getCellValues = (row: { [x: string]: any }): any[] => {
    return columns.map((column) => {
      if (column.cell && typeof column.cell === "function") {
        return column.cell(row[column.property], row);
      }
      return row[column.property];
    });
  };

  return (
    <table className="flex flex-col border rounded">
      <thead>
        <tr className="flex">
          {columns.map((col, ci) => (
            <th className="flex-1 text-left border-b p-2" key={ci}>
              {col.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => {
          return (
            <tr key={ri} className="flex border-b">
              {getCellValues(row).map((cell, ci) => (
                <td className="flex-1 p-2" key={ci}>
                  {cell}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
