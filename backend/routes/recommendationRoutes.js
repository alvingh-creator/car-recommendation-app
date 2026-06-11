const express = require("express");
const router = express.Router();

const cars = require("../data/cars");
const {
  generateAISummary,
} = require("../services/geminiService");

router.post("/", async (req, res) => {
  try {
    const {
      budget,
      fuelType,
      transmission,
      seating,
    } = req.body;

    const scoredCars = cars.map((car) => {
      let score = 0;
      const reasons = [];

      if (
        fuelType &&
        car.fuelType === fuelType
      ) {
        score += 30;
        reasons.push(
          "matches your fuel preference"
        );
      }

      if (
        transmission &&
        car.transmission === transmission
      ) {
        score += 25;
        reasons.push(
          "matches your transmission preference"
        );
      }

      if (
        seating &&
        car.seating === Number(seating)
      ) {
        score += 20;
        reasons.push(
          "matches your seating requirement"
        );
      }

      if (budget) {
        const priceDifference =
          Math.abs(
            car.price -
              Number(budget)
          );

        score += Math.max(
          0,
          25 -
            priceDifference /
              100000
        );
      }

      if (
        reasons.length === 0
      ) {
        reasons.push(
          "offers strong overall value"
        );
      }

      return {
        ...car,
        score:
          Math.round(score),
        explanation:
          "Recommended because it " +
          reasons.join(", "),
      };
    });

    const recommendations =
      scoredCars
        .sort(
          (a, b) =>
            b.score - a.score
        )
        .slice(0, 6);

    const aiSummary =
      await generateAISummary(
        {
          budget,
          fuelType,
          transmission,
          seating,
        },
        recommendations
      );

    res.json({
      success: true,
      recommendations,
      aiSummary,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to generate recommendations",
    });
  }
});

module.exports = router;