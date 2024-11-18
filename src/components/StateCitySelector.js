import React, { useState } from "react";

function StateCitySelector() {
  const states = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
  };

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(states[state] || []);
    setSelectedCity(""); // Reset city selection
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>State and City Selector</h2>
      <div>
        <select onChange={handleStateChange} style={styles.select}>
          <option value="">-- Select State --</option>
          {Object.keys(states).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      {cities.length > 0 && (
        <div>
          <select onChange={handleCityChange} style={styles.select} value={selectedCity}>
            <option value="">-- Select City --</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedCity && (
        <p style={styles.result}>
          Selected City: <strong>{selectedCity}</strong>
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  select: {
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
  },
};

export default StateCitySelector;
