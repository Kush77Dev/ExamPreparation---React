import React, { useState, useEffect } from "react";

function FetchJson() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from a JSON file or API
  useEffect(() => {
    fetch("/data.json") // Replace with your JSON file or API endpoint
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>Data Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} style={styles.th}>
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, i) => (
                  <td key={i} style={styles.td}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  table: {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
    border: "1px solid #ddd",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  },
};

export default FetchJson;
