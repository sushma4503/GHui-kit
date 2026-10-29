import React from 'react';

/**
 * Reusable Table Component
 * All class names are prefixed with "gh-" as requested.
 * @param {Array} columns - Array of { header: string, accessor: string, render?: function }
 * @param {Array} data - Array of row objects
 * @param {string} emptyMessage - Text to show when data is empty
 */
const Table = ({
  columns = [],
  data = [],
  emptyMessage = "No records found.",
  className = ""
}) => {
  return (
    <div className={`gh-table-responsive ${className}`}>
      <table className="gh-custom-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.accessor || index}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={column.accessor || colIndex}>
                    {column.render
                      ? column.render(row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="gh-table-empty">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
