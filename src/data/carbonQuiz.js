/**
 * Interactive Client-Side Carbon Footprint Quiz Data & Calculation Logic.
 * NOTE: Visible disclaimer that this is an approximation for student awareness.
 */

export const quizQuestions = [
  {
    id: "transport",
    category: "Daily Transit",
    title: "How do you typically commute to college / around campus?",
    options: [
      {
        label: "Bicycle / Walking / Hostel Resident",
        score: 0.2,
        tip: "Keep inspiring peers by walking or cycling for short distances!"
      },
      {
        label: "Public Metro / Shared Electric Bus",
        score: 0.6,
        tip: "Public transit is efficient; pairing metro with e-rickshaws keeps your transit footprint light."
      },
      {
        label: "Two-Wheeler (Petrol Scooter / Bike)",
        score: 1.2,
        tip: "Consider carpooling with classmates traveling along the same route to cut fuel burning in half."
      },
      {
        label: "Private Four-Wheeler (Solo Car)",
        score: 2.2,
        tip: "Carpooling with 3+ friends or taking the metro twice a week can slash over 1 ton of CO2 annually."
      }
    ]
  },
  {
    id: "electricity",
    category: "Electricity & AC Usage",
    title: "How many hours a day do you use air conditioning or heavy compute?",
    options: [
      {
        label: "Rarely / Natural Ventilation (< 1 hr)",
        score: 0.3,
        tip: "Great work using cross-ventilation! Ensure your appliances are rated 4 or 5 stars."
      },
      {
        label: "Moderate (2 to 5 hours / shared room)",
        score: 0.8,
        tip: "Set your AC temperature to 24°C-26°C instead of 18°C. Every degree higher cuts 6% power usage."
      },
      {
        label: "High Usage (6 to 10 hours daily)",
        score: 1.5,
        tip: "Pairing a ceiling fan with a 25°C AC setting cools just as well while saving substantial electricity."
      },
      {
        label: "Continuous AC / Multi-device Setup (> 10 hrs)",
        score: 2.3,
        tip: "Clean AC air filters monthly to boost cooling efficiency and turn off idling power strips at night."
      }
    ]
  },
  {
    id: "food",
    category: "Dietary Habits",
    title: "What best describes your typical daily meal choice?",
    options: [
      {
        label: "Strict Vegetarian / Plant-Focused",
        score: 0.5,
        tip: "Plant-rich diets generate 50% fewer emissions than meat-heavy diets. Prioritize seasonal local produce!"
      },
      {
        label: "Vegetarian with regular dairy products",
        score: 0.9,
        tip: "Try sampling plant-based milk alternatives or locally sourced dairy from sustainable farms."
      },
      {
        label: "Mixed Diet (Meat / poultry 1-3 times a week)",
        score: 1.4,
        tip: "Designate two 'Meatless Days' a week to easily reduce dietary agricultural footprint."
      },
      {
        label: "Frequent Non-Vegetarian (Daily meat / fast food)",
        score: 2.1,
        tip: "Swapping one red meat meal per week for lentils, paneer, or beans cuts about 250kg CO2 per year."
      }
    ]
  },
  {
    id: "waste",
    category: "Waste & Single-Use Plastics",
    title: "How regularly do you practice waste segregation and refuse plastics?",
    options: [
      {
        label: "Always carry reusable bottles, bags, and segregate waste",
        score: 0.1,
        tip: "You are setting a gold standard. Lead by example in your hostel and college cafeteria!"
      },
      {
        label: "Often refuse plastics, segregate e-waste when available",
        score: 0.5,
        tip: "Keep a foldable cloth bag in your backpack so you never have to accept a plastic carry bag."
      },
      {
        label: "Occasionally use disposable bottles and food packaging",
        score: 0.9,
        tip: "Switching to a personal insulated water flask pays for itself and eliminates 150+ plastic bottles."
      },
      {
        label: "Rarely segregate waste; rely frequently on single-use items",
        score: 1.4,
        tip: "Start with one simple habit: refuse plastic cups at campus tea stalls and carry your own tumbler."
      }
    ]
  }
];

export const calculateResult = (selectedAnswers) => {
  let totalTons = 0;
  const personalizedTips = [];

  quizQuestions.forEach((q) => {
    const chosenIndex = selectedAnswers[q.id];
    if (chosenIndex !== undefined) {
      const opt = q.options[chosenIndex];
      totalTons += opt.score;
      personalizedTips.push({
        category: q.category,
        tip: opt.tip
      });
    }
  });

  // Clamp & format
  const scoreFormatted = totalTons.toFixed(1);
  let status = "Eco Champion";
  let statusColor = "text-emerald-600";
  let verdict = "Your lifestyle demonstrates exceptional care for environmental sustainability!";

  if (totalTons > 4.5) {
    status = "High Carbon Footprint";
    statusColor = "text-amber-600";
    verdict = "Your carbon score is above average for college students. Implementing a few small daily adjustments will make a tremendous difference!";
  } else if (totalTons > 2.5) {
    status = "Conscious Citizen";
    statusColor = "text-lime-600";
    verdict = "You maintain a balanced lifestyle with great eco-habits and clear opportunities for further green optimization!";
  }

  return {
    score: scoreFormatted,
    status,
    statusColor,
    verdict,
    tips: personalizedTips.slice(0, 3)
  };
};
