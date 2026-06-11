const generateAISummary = async (
userPreferences,
recommendations
) => {

if (
!recommendations ||
recommendations.length === 0
) {
return `
No exact matches were found for your selected preferences.

Try adjusting your budget, body type, or fuel preference to discover more suitable vehicles.
`;
}

const topCar =
recommendations[0];

const {
budget,
fuelType,
transmission,
seating,
brand,
bodyType,
} = userPreferences;

return `
After analyzing your preferences, ${topCar.name} emerges as the strongest overall recommendation.

This vehicle closely aligns with your selected budget${fuelType ? `, preferred ${fuelType.toLowerCase()} powertrain` : ""}${transmission ? `, ${transmission.toLowerCase()} transmission` : ""}${bodyType ? `, ${bodyType.toLowerCase()} body style` : ""}${seating ? `, and ${seating}-seat requirement` : ""}.

Its overall match score of ${topCar.score}% places it ahead of the other available options.

You may also compare the remaining recommendations for alternative styling, features, brand preference, fuel efficiency, and long-term ownership value before making a final purchase decision.
`;
};

module.exports = {
generateAISummary,
};
