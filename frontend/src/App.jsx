import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    budget: "",
    fuelType: "",
    transmission: "",
    seating: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log("Search Filters:", filters);
  };

  return (
    <div className="container">
      <h1>AI Car Recommendation</h1>
      <p>Find the best car based on your needs</p>

      <div className="form">
        <input
          type="number"
          name="budget"
          placeholder="Enter Budget"
          value={filters.budget}
          onChange={handleChange}
        />

        <select
          name="fuelType"
          value={filters.fuelType}
          onChange={handleChange}
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select
          name="transmission"
          value={filters.transmission}
          onChange={handleChange}
        >
          <option value="">Select Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        <select
          name="seating"
          value={filters.seating}
          onChange={handleChange}
        >
          <option value="">Select Seating Capacity</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>

        <button onClick={handleSearch}>
          Search Cars
        </button>
      </div>
    </div>
  );
}

export default App;