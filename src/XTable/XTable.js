import React, { useState } from "react";

const XTable = () => {
  // Initial data
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Sort by Date
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date); // it gives a number in millisecond which makes comparison easy
      const diff = dateB - dateA;
      //   if (dateA > dateB) return -1;
      //   if (dateA < dateB) return 1;
      //or
      if (diff !== 0) return diff;

      // If dates are the same, sort by views----> (in descending order)
      return b.views - a.views;
    });

    setData(sortedData);
  };

  // Sort by Views
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views > a.views) return 1;
      if (b.views < a.views) return -1;

      // If views are the same, sort by date (latest first--->descending order)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

    setData(sortedData);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate} style={{ marginRight: "10px" }}>
        Sort by Date
      </button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table
        style={{
          width: "30%",
          borderCollapse: "collapse",
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Views</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Article
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {row.date}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {row.views}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {row.article}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
