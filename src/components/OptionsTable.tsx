interface TableProps {
  columns: { name: string; key: string }[];
  data: { [key: string]: any }[];
  handleRadioChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const formatTimestamp = (utcTimestamp: number): string => {
  // Convert seconds to milliseconds
  const date = new Date(utcTimestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };
  return date.toLocaleString(undefined, options);
};

const Table: React.FC<TableProps> = ({ columns, data, handleRadioChange }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <th>
                <label>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-secondary"
                    onChange={handleRadioChange}
                  />
                </label>
              </th>
              {columns.slice(1).map((column, colIndex) => (
                <td key={colIndex}>
                  <div>
                    {column.key === "expiry"
                      ? formatTimestamp(item[column.key])
                      : column.key === "tokenName"
                      ? item[column.key].toUpperCase()
                      : item[column.key]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
