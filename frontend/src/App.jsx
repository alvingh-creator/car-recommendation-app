import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    budget: "",
    fuelType: "",
    transmission: "",
    seating: "",
  });

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState("");

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        }
      );

      const data = await response.json();

      setCars(data.recommendations || []);
      setAiSummary(data.aiSummary || "");
    } catch (error) {
      console.error(error);
      alert("Failed to fetch recommendations");
    } finally {
      setLoading(false);
    }
  };

  const topCar = cars.length > 0 ? cars[0] : null;
  const otherCars = cars.slice(1);

  return (
    <div className="container">
      <div className="hero">
        <h1>🚗 AI Car Advisor</h1>
        <p>
          Discover the perfect vehicle based on your budget and preferences.
        </p>
      </div>

      <div className="form">
        <select
          name="budget"
          value={filters.budget}
          onChange={handleChange}
        >
          <option value="">Select Budget</option>
          <option value="300000">₹3 Lakh</option>
          <option value="500000">₹5 Lakh</option>
          <option value="700000">₹7 Lakh</option>
          <option value="1000000">₹10 Lakh</option>
          <option value="1500000">₹15 Lakh</option>
          <option value="2000000">₹20 Lakh</option>
          <option value="3000000">₹30 Lakh</option>
        </select>

        <select
          name="fuelType"
          value={filters.fuelType}
          onChange={handleChange}
        >
          <option value="">Fuel Type</option>
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
          <option value="">Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        <select
          name="seating"
          value={filters.seating}
          onChange={handleChange}
        >
          <option value="">Seating Capacity</option>
          <option value="4">4 Seats</option>
          <option value="5">5 Seats</option>
          <option value="7">7 Seats</option>
        </select>

        <button onClick={handleSearch}>
          {loading ? "Searching..." : "Find My Car"}
        </button>
      </div>

      {aiSummary && (
        <div className="ai-summary">
          <h2>🤖 AI Recommendation Summary</h2>
          <p>{aiSummary}</p>
        </div>
      )}

      {topCar && (
        <div className="featured-card">
          <div className="featured-badge">🏆 Best Match</div>

          <h2>{topCar.name}</h2>

          <div className="score-badge">
            {topCar.score}% Match
          </div>

          <p>
            <strong>Price:</strong> ₹
            {topCar.price.toLocaleString()}
          </p>

          <p>
            <strong>Fuel:</strong> {topCar.fuelType}
          </p>

          <p>
            <strong>Transmission:</strong>{" "}
            {topCar.transmission}
          </p>

          <p>
            <strong>Seating:</strong>{" "}
            {topCar.seating} Seats
          </p>

          <p>{topCar.explanation}</p>
        </div>
      )}

      <div className="results">
        {otherCars.map((car, index) => (
          <div
            key={car.id}
            className="card"
          >
            <div className="score-badge">
              {car.score}% Match
            </div>

            <h3>
              #{index + 2} Recommendation
            </h3>

            <h2>{car.name}</h2>

            <p>
              <strong>Price:</strong> ₹
              {car.price.toLocaleString()}
            </p>

            <p>
              <strong>Fuel:</strong> {car.fuelType}
            </p>

            <p>
              <strong>Transmission:</strong>{" "}
              {car.transmission}
            </p>

            <p>
              <strong>Seating:</strong> {car.seating}
            </p>

            <p>{car.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
