import React from "react";

const Table = ({ columns, rows }: { columns: Column[]; rows: Item[] }) => {
  const getCellValues = (row: { [x: string]: any }): any[] => {
    return columns.map((column) => {
      let columnValue = row[column.property];

      // custom value getter
      if (column.valueGetter && typeof column.valueGetter === "function") {
        columnValue = column.valueGetter(row);
      }

      // custom cell render
      if (column.cell && typeof column.cell === "function") {
        return column.cell(columnValue, row);
      }
      return columnValue;
    });
  };

  return (
    <table className="flex flex-col border rounded">
      <thead>
        <tr className="flex border-b pl-2 py-2 gap-0.5">
          {columns.map((col, ci) => (
            <th
              className={`flex-1 text-left ${col.headerClassName ?? ""}`}
              key={ci}>
              {col.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => {
          return (
            <tr key={ri} className="flex border-b pl-2 py-2">
              {getCellValues(row).map((cell, ci) => (
                <td className="flex-1" key={ci}>
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
