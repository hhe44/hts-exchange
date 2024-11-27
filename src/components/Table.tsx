import { useState } from "react";

const headers = [
  // First header is empty string for the checkbox
  { name: "", key: "" },
  { name: "Token Id", key: "tokenId" },
  { name: "Token Name", key: "tokenName" },
  { name: "Quantity", key: "quantity" },
  { name: "Premium", key: "premium" },
  { name: "Strike Price", key: "strikePrice" },
  { name: "Expiration", key: "expiry" },
  { name: "Seller", key: "seller" },
];

const DUMMY_DATA = [
  {
    tokenId: "0.123456",
    tokenName: "sauce",
    quantity: 100,
    premium: 20,
    strikePrice: 200,
    expiry: 1732720752,
    seller: "0.123456",
  },
  {
    tokenId: "0.123457",
    tokenName: "pack",
    quantity: 100,
    premium: 20,
    strikePrice: 200,
    expiry: 1732720752,
    seller: "0.123456",
  },
  {
    tokenId: "0.123458",
    tokenName: "karate",
    quantity: 100,
    premium: 20,
    strikePrice: 200,
    expiry: 1732720752,
    seller: "0.123456",
  },
  {
    tokenId: "0.123459",
    tokenName: "grelf",
    quantity: 100,
    premium: 20,
    strikePrice: 200,
    expiry: 1732720752,
    seller: "0.123456",
  },
];

const rows = DUMMY_DATA;

const formatTimestamp = (utcTimestamp: number): string => {
  // Convert seconds to milliseconds
  const date = new Date(utcTimestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  };
  return date.toLocaleString(undefined, options);
};

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.tokenId}>
              <th>
                <label>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-secondary"
                  />
                </label>
              </th>
              <td>
                <div>{item.tokenId}</div>
              </td>
              <td>
                <div>{item.tokenName.toUpperCase()}</div>
              </td>
              <td>
                <div>{item.quantity}</div>
              </td>
              <td>
                <div>{item.premium}</div>
              </td>
              <td>
                <div>{item.strikePrice}</div>
              </td>
              <td>
                <div>{formatTimestamp(item.expiry)}</div>
              </td>
              <td>
                <div>{item.seller}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
