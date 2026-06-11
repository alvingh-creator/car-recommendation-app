const express = require("express");
const cors = require("cors");
require("dotenv").config();
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/recommendations", recommendationRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});